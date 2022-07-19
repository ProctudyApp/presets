import Ajv from 'ajv';
import { readFile } from "fs/promises";

const schema = JSON.parse(await readFile("./schema.json"));
const data = JSON.parse(await readFile("./presets.json"));

const ajv = new Ajv();

const validate = ajv.compile(schema)
const valid = validate(data)

if (valid) {
  console.log("\x1b[32m✔︎ JSONの形式は問題ありません\x1b[0m");
} else {
  console.log("\x1b[31m✖️ 以下のエラーが発生しました:\x1b[0m")
  console.log(validate.errors);
}
