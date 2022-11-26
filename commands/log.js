import fs from 'fs';

const defaultFile = 'C:/Windows/Panther/setuperr.log';

const readFile = () => {
  // Read file and convert to string then slice per \n
  const file = fs.readFileSync(defaultFile).toString().trim().split('\n');

  let arrayDefault = [];

  file.forEach((valueOfFile, indexFile, arrayFile) => {
    let data = {
      dateTime: '',
      loggingLevel: '',
      loggingComponent: '',
      message: '',
    };
    let loggingComponent = '';
    let message = '';

    // Create content to array and get every index of arrayFile then split when have space
    const splitingSpace = arrayFile[indexFile].split(/\s+/);
    console.log(splitingSpace)
    // Set value from spliting to on key
    data.dateTime = `${splitingSpace[0]} ${splitingSpace[1]}`;
    data.loggingLevel = splitingSpace[2];
    

    console.log('data', data);
  });
};

export default {
  readFile,
};
