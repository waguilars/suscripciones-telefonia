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

const getAverage = (data, year) => {
        if (isNaN(year)) {
            throw new Error('El año ingresado no es valido.')
        }
        let average = 0;
        data.forEach(element => {
            let value = parseFloat(element[`${year}`]);
            //console.log(value)
            if (!isNaN(value)) {
                average += value;
            }
        });
        average = parseFloat((average / data.length).toFixed(2))
        return average

        /* Validacion del codigo de pais para despues */
        // let country = data.filter(country => country['Country Code'] === countryCode)
        // if (country.length === 0) {
        //     throw new Error(
        //         'El código del pais no es valido, asegurese de usar la especificación ISO 3166 ALPHA-3.')
        // }




    }
    //Gabriel

const isGraderThanAverage = (data, year, country, prom) => {
    let answer = false;
    data.forEach(element => {
        let codigo = element['Country Code'];
        if (codigo === country) {
            //console.log('es pais existe');
            let pais = element[`${year}`];
            if (pais > prom) {
                //console.log(pais);
                //console.log('El valor del pais es mayor a la media ');
                answer = true;
                return
            }
            //console.log(pais);



        }

    })
    return answer;

}


/* pruebas */
const tests = async() => {
    let data = await importCSV('C:\\Users\\Gabriel\\Desktop\\archivos\\doc.csv')
    let prom = getAverage(data, 2015)
    console.log(prom);
    console.log(isGraderThanAverage(data, 2015, 'ECU', prom));

}

tests().catch(console.log)