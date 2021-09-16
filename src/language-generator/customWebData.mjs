import fs from "fs";
import { join } from "path";
import { DocExtractors } from "./DocExtractor.mjs";

// Read file recursive
// https://stackoverflow.com/questions/41462606/get-all-files-recursively-in-directories-nodejs/47492545
const isDirectory = (path) => fs.statSync(path).isDirectory();
const getDirectories = (path) =>
  fs
    .readdirSync(path)
    .map((name) => join(path, name))
    .filter(isDirectory);

const isFile = (path) => fs.statSync(path).isFile();
const getFiles = (path) =>
  fs
    .readdirSync(path)
    .map((name) => join(path, name))
    .filter(isFile);

const getFilesRecursively = (path) => {
  let dirs = getDirectories(path);
  let files = dirs
    .map((dir) => getFilesRecursively(dir)) // go through each directory
    .reduce((a, b) => a.concat(b), []); // map returns a 2d array (array of file arrays) so flatten

  return files.concat(getFiles(path));
};

const docPath = (path) => join(process.cwd(), "docs", "component", path);

const [basic, advance] = [
  getFilesRecursively(docPath("basic")),
  getFilesRecursively(docPath("advance")),
];

const formatDocLink = (filePath) =>
  `https://developers.tiki.vn${
    filePath.slice(process.cwd().length).split(".")[0]
  }`;

const customData = {
  version: "1.0.0",
  tags: [],
};
[...basic, ...advance]
  .filter((filePath) => !/styling/g.test(filePath))
  .forEach((filePath) => {
    const content = fs.readFileSync(filePath);
    const docExtractor = DocExtractors(content);
    try {
      customData.tags.push(docExtractor.fullDoc(formatDocLink(filePath)));
    } catch (e) {
      console.log("getFilePathError", filePath);
    }
  });

const writeDocs = (content) => {
  fs.writeFileSync(
    "./customWebData.ts",
    `const customWebData=${JSON.stringify(content, null, 2)}`
  );
};
writeDocs(customData);
// const extractors = DocExtrators(doc);

// extractors.writeDoc();
