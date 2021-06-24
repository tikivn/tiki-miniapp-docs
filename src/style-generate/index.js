const fs = require('fs');
const path = require('path');
const css = require('css');

const baseDir = path.join(
  __dirname,
  '..',
  '..',
  'docs',
  'component',
  'advance',
  'styling',
);

function createStyleDoc(tcssPath, names, fileName) {
  const docPath = path.join(baseDir, ...names, fileName + '.generated.mdx');
  const content = fs.readFileSync(tcssPath).toString();
  const cssContent = css.parse(content);
  const rules = cssContent.stylesheet.rules
    .filter(rule => rule.type === 'rule' && rule.selectors.join('') !== ':root')
    .map(rule => {
      const className = rule.selectors[0];
      const classContent = rule.declarations
        .map(decl => {
          return `\`${decl.property}: ${decl.value};\``;
        })
        .join('<br />');
      return `| \`${className}\` | ${classContent} |`;
    })
    .join('\n');

  const docContent = `---
sidebar_label: ${fileName}
---

| class   | style            |
| ------- | ---------------- |
${rules}
`;

  fs.writeFileSync(docPath, docContent);
}

function visitPath(filepath, names) {
  if (!fs.lstatSync(filepath).isDirectory()) {
    return;
  }

  const docPath = path.join(baseDir, ...names);
  if (!fs.existsSync(docPath)) {
    fs.mkdirSync(docPath);
  }

  fs.readdirSync(filepath).forEach(item => {
    const itemPath = path.join(filepath, item);
    if (fs.lstatSync(itemPath).isDirectory()) {
      visitPath(itemPath, [...names, items]);
      return;
    }

    if (!item.endsWith('.tcss')) {
      return;
    }

    const fileName = item.slice(0, -5);
    createStyleDoc(itemPath, names, fileName);
  });
}

(function () {
  const tiniStylePath = path.join(
    __dirname,
    '..',
    '..',
    'node_modules',
    '@tiki.vn',
    'tini-style',
    'es',
  );
  fs.readdirSync(tiniStylePath).forEach(name => {
    visitPath(path.join(tiniStylePath, name), [name]);
  });
})();
