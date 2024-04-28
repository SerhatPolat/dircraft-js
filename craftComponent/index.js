import { existsSync, mkdirSync, writeFile } from "fs";
import config from "../config.js";
import { component, story, mockProps, test } from "./componentTemplates.js";

const [name] = process.argv.slice(2);

if (!name) throw new Error("You must provide a component name.");

const dir = `${config.components_path}${name}/`;

if (existsSync(dir)) throw new Error("That component already exists.");

mkdirSync(dir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

writeFile(
  `${dir}/${name}${config.file_extensions.component}`,
  component(name),
  writeFileErrorHandler
);
writeFile(
  `${dir}/${name}${config.file_extensions.story}`,
  story(name),
  writeFileErrorHandler
);
writeFile(
  `${dir}/${name}${config.file_extensions.mockProps}`,
  mockProps(name),
  writeFileErrorHandler
);
writeFile(
  `${dir}/${name}${config.file_extensions.test}`,
  test(name),
  writeFileErrorHandler
);
