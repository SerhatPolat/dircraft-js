import { existsSync, mkdirSync, writeFile } from "fs";
import config from "../config.js";
import { page } from "./pageTemplate.js";

const [name] = process.argv.slice(2);

if (!name) throw new Error("You must provide a page name.");

const dir = `${config.pages_path}${name}/`;

if (existsSync(dir)) throw new Error("That page already exists.");

mkdirSync(dir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

writeFile(
  `${dir}/index${config.file_extensions.page}`,
  page(name),
  writeFileErrorHandler
);
