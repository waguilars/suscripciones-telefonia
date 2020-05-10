/* Controlador de paises
    TODO: Funcion import csv Ricardo
 */

const { promises: fs } = require('fs');
const csvToJson = require('csvtojson');

const importCSV = async path => {

    const csvFile = await fs.readFile(path, 'utf-8')
        .catch(err => { throw new Error('El archivo no existe.') });

    let lines = csvFile.split(/\r?\n/);
    let csvString = ''
    lines.filter((value, index) => {
        if (index >= 4) {
            csvString += value + '\n'
        }
    });

    const csvData = await csvToJson().fromString(csvString);
    if (csvData.length === 0) {
        throw new Error('El formato del archivo no es valido.')
    }

    return csvData;

}

const getAverage = (data, countryCode, year) => {
}