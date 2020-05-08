const CSVtoJSON = require('csvtojson');

let csvData;

let load_data = async () => {
    let csv = await (CSVtoJSON().fromFile('./doc.csv'));
    console.log(csv)
    return csv
}

load_data()