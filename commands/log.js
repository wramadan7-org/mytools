import fs from 'fs';

const defaultFile = 'C:/Windows/Panther/setuperr.log';

/**
 * Read and conert file .log and convert to JSON
 * @returns Json
 */
const readAndConvertToJson = () => {
  // Read file and convert to string then slice per \n
  const file = fs.readFileSync(defaultFile).toString().trim().split('\n');

  const arrayDefault = [];

  file.forEach((valueOfFile, indexFile, arrayFile) => {
    const data = {
      dateTime: '',
      loggingLevel: '',
      loggingCode: '',
      loggingComponent: '',
      message: '',
    };
    let loggingCode = '';
    let loggingComponent = '';
    let message = '';

    // Create content to array and get every index of arrayFile then split when have space
    const splitingSpace = arrayFile[indexFile].split(/\s+/);

    // Check array index 3 is start with [ or not
    if (splitingSpace[3].startsWith('[')) {
      // Set logging code
      loggingCode = splitingSpace[3];
      // Set logging component from array splitingSpace index 4
      loggingComponent = splitingSpace[4];
      // Set message
      // Choose index start use splice then join with the next element
      message = splitingSpace.splice(5).join(' ');
    } else {
      // Set logging component from array splitingSpace index 3
      loggingComponent = splitingSpace[3];
      // Set message
      // Choose index start use splice then join with the next element
      message = splitingSpace.splice(4).join(' ');
    }

    // Set value from spliting to on key
    data.dateTime = `${splitingSpace[0]} ${splitingSpace[1].slice(0, -1)}`; // Delete , in last character array index 1
    data.loggingCode = loggingCode;
    data.loggingLevel = splitingSpace[2];
    data.loggingComponent = loggingComponent;
    data.message = message;

    arrayDefault.push(data);
  });

  return JSON.stringify(arrayDefault, null, 2);
};

const readAndConvertToText = () => {
  const readJson = readAndConvertToJson();
  const parseJson = JSON.parse(readJson);

  const arrayDefault = [];

  parseJson.forEach((value) => {
    const getValueObject = Object.values(value);
    // Append new line in last index of element array
    getValueObject.push('\n');
    const splicingValue = getValueObject.splice('').join(' ');
    arrayDefault.push(splicingValue);
  });

  // Change to string and split with , then join it again
  const text = arrayDefault.toString().split(',').join('');

  return text;
};

/**
 * Check file exists or not
 * @param { String } file
 * @returns Boolean
 */
const isFileExists = async (file) => {
  try {
    if (fs.existsSync(file)) {
      return true;
    }

    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

/**
 * Write file json
 * @param { String } location
 * @returns Json
 */
const writeFileToJson = (location) => {
  const readFileJson = readAndConvertToJson();

  fs.writeFileSync(`${location}/errorLog.json`, readFileJson);

  return readFileJson;
};

/**
 * Write file text
 * @param { String } location
 * @returns Text|String
 */
const writeFileToText = (location) => {
  const readFileText = readAndConvertToText();

  fs.writeFileSync(`${location}/errorLog.log`, readFileText);

  return readFileText;
};

export default {
  readAndConvertToJson,
  readAndConvertToText,
  isFileExists,
  writeFileToJson,
  writeFileToText,
};
