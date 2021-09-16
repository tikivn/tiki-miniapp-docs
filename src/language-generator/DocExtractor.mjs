import { fromMarkdown } from "mdast-util-from-markdown";
import { gfm } from "micromark-extension-gfm";
import { gfmFromMarkdown } from "mdast-util-gfm";
import get from "lodash.get";

export function DocExtractors(rawContent) {
  const tree = fromMarkdown(rawContent, {
    extensions: [gfm()],
    mdastExtensions: [gfmFromMarkdown],
  });

  const query = ({ type, value, limit }) => {
    const res = [];
    for (const md of tree.children) {
      if (value) {
        if (
          md.type === type &&
          md.children.find((v) => v.value.includes(value))
        ) {
          res.push(md);
        }
      } else {
        if (md.type === type) {
          res.push(md);
        }
      }
      if (limit && res.length === limit) {
        return res;
      }
    }
    return res;
  };

  const getName = () => {
    const [node] = query({ type: "heading", limit: 1 });

    if (node) {
      return node.children[0].value.slice("title:".length).trim().toLowerCase();
    }
    return "";
  };
  const getAttributes = () => {
    const [node] = query({ type: "table", limit: 1 });
    if (!node || !node.children) {
      return [];
    }
    const [heading, ...rows] = node.children;
    const tableCellIdx = {
      property: 0,
      type: 3,
      defaultValue: 2,
      description: 1,
      required: 4,
    };
    const isElementInclude = (el) => (key) =>
      el.children[0].value.toLowerCase().includes(key);
    heading.children.forEach((element, idx) => {
      const isInclude = isElementInclude(element);
      if (isInclude("property")) {
        tableCellIdx.property = idx;
        return;
      }
      if (isInclude("type")) {
        tableCellIdx.type = idx;
        return;
      }
      if (isInclude("default")) {
        tableCellIdx.defaultValue = idx;
        return;
      }
      if (isInclude("description")) {
        tableCellIdx.description = idx;
        return;
      }
    });

    const attributes = [];
    rows.forEach(({ children }) => {
      const getValue = (cell) => {
        const value = get(cell, "children", [])
          .map((i) => i.value)
          .join("");
        return value;
      };
      const rowAttributes = {
        name: "",
        description: "",
        type: "",
      };
      rowAttributes.name = getValue(children[tableCellIdx.property]);
      rowAttributes.type = getValue(children[tableCellIdx.type]);
      rowAttributes.description = getValue(children[tableCellIdx.description]);
      attributes.push(rowAttributes);
    });
    return attributes;
  };

  const getDescription = () => {
    const heads = query({ type: "heading", limit: 3 });
    if (heads.length > 1) {
      const [_, startNode, endNode] = heads;
      const description = rawContent
        .toString()
        .slice(startNode.position.start.offset, endNode.position.start.offset);

      //show more detail docs
      // if (detail) {
      //   return {
      //     kind: "markdown",
      //     value: description.concat(
      //       `\n${rawContent.slice(
      //         detail.position.start.offset,
      //         detail.position.end.offset
      //       )}`
      //     ),
      //   };
      // }
      return { kind: "markdown", value: description };
    }
  };
  const fullDoc = (docLink) => {
    const name = getName();
    const doc = {
      name,
      description: getDescription(),
      attributes: getAttributes(),
      references: [
        {
          name,
          url: docLink,
        },
      ],
    };
    return doc;
  };

  return {
    getName,
    getAttributes,
    getDescription,
    fullDoc,
  };
}
