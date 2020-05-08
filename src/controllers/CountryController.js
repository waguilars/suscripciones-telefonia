/* Controlador de paises
    TODO: Funcion import csv Ricardo
 */

const fs = require('fs');
const csvToJson = require('csvtojson');


const importCSV = async path => {
    const csvFile = fs.readFileSync(path, 'utf-8');
    let lines = csvFile.split(/\r?\n/);

    let csvString = ''
    lines.filter((value, index) => {
        if (index >= 4) {
            csvString += value + '\n'
        }
    });

    return await csvToJson().fromString(csvString);
}



