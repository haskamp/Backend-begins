import { writeFile } from "fs/promises";

const minContent = {
  name: "backend-begins",
  type: "module",
  devDependencies: {
    "eslint": "^7.32.0",

  },
};
const prettierRC = {
};

const eslintRC = {
};

try {
  writeFile("package.json", JSON.stringify(minContent, null, 4));
} catch (err) {
  console.log(err);
}

try {
  writeFile(".prettierrc", JSON.stringify(prettierRC, null, 4));
} catch (err) {
  console.log(err);
}

try {
  writeFile(".eslintrc", JSON.stringify(eslintRC, null, 4));
} catch (err) {
  console.log(err);
}
