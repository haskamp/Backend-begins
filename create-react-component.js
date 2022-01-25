import { mkdir, writeFile } from "fs/promises";
import path from "path";
import process from "node:process";

// API:
// node create-react-component.js directory componentName
// node create-react-component.js atoms Button
// -> index.jsx & README.md

const jsxTemplate = componentName => `
import React from "react"
const ${componentName} = (children, ...rest) => {
    return <div {...rest}>{children}</div>
}
export default ${componentName}
`;

const readmeTemplate = componentName =>
  `

This is a README of ${componentName}

`;

const createReactComponent = async (directoryName, componentName) => {
  console.log(directoryName);
  const directory = path.join(directoryName, componentName);
  console.log(directory);
  const jsxFileName = path.join(directory, "index.jsx");
  console.log(jsxFileName);
  const readmeFileName = path.join(directory, "README.md");

  // await is usable only due to async
  await mkdir(directory, { recursive: true });
  writeFile(jsxFileName, jsxTemplate(componentName))
    .then(() => {
      console.log(`created ${jsxFileName}`);
    })
    .catch(err => {
      console.log(err);
    });
  writeFile(readmeFileName, readmeTemplate(componentName))
    .then(() => {
      console.log(`created ${readmeFileName}`);
    })
    .catch(err => {
      console.log(err);
    });
};

// Component Layout

// Add arguments from console with argv to create component with function
// Read arguments form console
const [directoryName, componentName] = process.argv.slice(2);

console.log([directoryName, componentName]);
void createReactComponent(directoryName, componentName);
