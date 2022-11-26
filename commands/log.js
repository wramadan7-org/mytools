import fs from 'fs';

const defaultFile = 'C:/Windows/Panther/setuperr.log';

const readAndConvertToJson = () => {
  // Read file and convert to string then slice per \n
  const file = fs.readFileSync(defaultFile).toString().trim().split('\n');

  const arrayDefault = [];

  file.forEach((valueOfFile, indexFile, arrayFile) => {
    const data = {
      dateTime: '',
      loggingLevel: '',
      loggingComponent: '',
      message: '',
    };
    let loggingComponent = '';
    let message = '';

    // Create content to array and get every index of arrayFile then split when have space
    const splitingSpace = arrayFile[indexFile].split(/\s+/);

    // Check array index 3 is start with [ or not
    if (splitingSpace[3].startsWith('[')) {
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
    data.dateTime = `${splitingSpace[0]} ${splitingSpace[1]}`;
    data.loggingLevel = splitingSpace[2];
    data.loggingComponent = loggingComponent;
    data.message = message;

    arrayDefault.push(data);
  });

  console.log(arrayDefault);
};

export default {
  readAndConvertToJson,
};
