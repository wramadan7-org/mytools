#! /usr/bin/env node
// Code above to make sure that CLI tool work correctly

import { program } from 'commander';
import log from './commands/log.js';

const {
  readAndConvertToJson,
  readAndConvertToText,
  writeFileToJson,
} = log;

const inputType = {
  json: 'json',
  text: 'text',
};

function collect(value, previous) {
  return previous.concat([value]);
}

program
  .option('-t, --type <value>', 'repeatable value', collect, [])
  .option('-o, --output <type>', 'repeatable value', collect, []);

program.parse();

const options = program.opts();

switch (options.type[0]) {
  case inputType.json:
    console.log('Process to read file...');
    console.log(readAndConvertToJson());
    console.log('Success to read file...');
    break;
  case inputType.text:
    console.log('Process to write file...');
    console.log(readAndConvertToText());
    console.log('Success to create file...');
    break;
  default:
    console.log('Process to read file...');
    console.log(readAndConvertToJson());
    console.log('Success to read file...');
    break;
}
