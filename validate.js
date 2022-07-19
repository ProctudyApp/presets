import Ajv from 'ajv';
import { readFile } from "fs/promises";

const schema = JSON.parse(await readFile("./schema.json"));
const data = JSON.parse(await readFile("./presets.json"));
//import schema from './schema.json';
//import data from './presets.json';

const ajv = new Ajv();

const validate = ajv.compile(schema)
const valid = validate(data)

if (!valid) {
  // バリデーションエラー
  console.log(validate.errors);
}
