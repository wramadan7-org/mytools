#! /usr/bin/env node
// Code above to make sure that CLI tool work correctly

import { program } from 'commander';
import log from './commands/log.js';

const {
  readAndConvertToJson,
  readAndConvertToText,
  writeFileToJson,
  writeFileToText,
} = log;

const defaultFileOutput = 'D:/Project/Backend/mytools/files';
const inputType = {
  json: 'json',
  text: 'text',
};

function collect(value, previous) {
  return previous.concat([value]);
}
// C:\Users\acer\Desktop
// D:\Project\Backend\mytools

program
  .option('-t, --type [type]', 'covert file to json or text', collect, [])
  .option('-o, --output [location]', 'location save file', collect, []);

program.parse();

const options = program.opts();

// Flag -t
if ((options.type && options.type.length > 0) && (!options.output && options.output.length <= 0)) {
  switch (options.type[0]) {
    case inputType.json:
      console.log('Process to read file as a json... \n');
      console.log(readAndConvertToJson());
      console.log('Success to read file... \n');
      break;
    case inputType.text:
      console.log('Process to read file as a text... \n');
      console.log(readAndConvertToText());
      console.log('Success to read file... \n');
      break;
    default:
      console.log('Process to read file as a text... \n');
      console.log(readAndConvertToText());
      console.log('Success to read file... \n');
      break;
  }
} else {
  console.log('DEFAULT');
  console.log('Process to read file as TEXT... \n');
  console.log(readAndConvertToText());
  console.log('Success to read file... \n');
}

// Flag -o
if ((options.output && options.output.length > 0) && (!options.type && options.type.length <= 0)) {
  switch (options.output[0]) {
    case defaultFileOutput:
      console.log('Process create file in parent at this folder... \n');
      console.log(writeFileToText(`${defaultFileOutput}/texts`));
      console.log('Success to create file with format text... \n');
      break;
    case !defaultFileOutput:
      console.log('Process create file in parent at this folder... \n');
      console.log(writeFileToText(options.output[0]));
      console.log('Success to create file with format text... \n');
      break;
    default:
      console.log('Process create file in parent at this folder... \n');
      console.log(writeFileToText(`${defaultFileOutput}/texts`));
      console.log('Success to create file with format text... \n');
      break;
  }
}

// Flag -t and -o
if ((options.type && options.output) && (options.type.length > 0 && options.output.length > 0)) {
  switch (options.type[0]) {
    case inputType.json:
      console.log('Process to read file as a json... \n');
      console.log(readAndConvertToJson());
      console.log('Success to read file... \n');

      console.log('Process create file in parent at this folder... \n');
      console.log(writeFileToJson(options.output[0]));
      console.log('Success to create file with format json... \n');
      break;
    case inputType.text:
      console.log('Process to read file as a text... \n');
      console.log(readAndConvertToText());
      console.log('Success to read file... \n');

      console.log('Process create file in parent at this folder... \n');
      console.log(writeFileToText(options.output[0]));
      console.log('Success to create file with format text... \n');
      break;
    default:
      console.log('Process to read file as a text... \n');
      console.log(readAndConvertToText());
      console.log('Success to read file... \n');

      console.log('Process create file in parent at this folder... \n');
      console.log(writeFileToText(options.output[0]));
      console.log('Success to create file with format text... \n');
      break;
  }
}
