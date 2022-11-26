import fs from 'fs';

const defaultFile = 'C:/Windows/Panther/setuperr.log';

const readFile = () => {
  // Read file and convert to string then slice per \n
  const file = fs.readFileSync(defaultFile).toString().trim().split('\n');

  let arrayDefault = [];

  file.forEach((valueOfFile, indexFile, arrayFile) => {
    let data = {
      dateTime: '',
      logingLevel: '',
      loggingComponent: '',
      message: '',
    };
    let loggingComponent = '';
    let message = '';

    // Create content to array and get every index of arrayFile then split when have space
    const splitingSpace = arrayFile[indexFile].split(/\s+/);



    console.log('splitingSpace', splitingSpace);
  });
};

export default {
  readFile,
};
