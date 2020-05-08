const CSVtoJSON = require('csvtojson');

let load_data = async() => {
      let csv = await (CSVtoJSON().fromFile('./data1.csv'));
      return csv;
}