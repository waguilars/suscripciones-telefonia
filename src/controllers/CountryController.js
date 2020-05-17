/* Controlador de paises
    TODO: Funcion import csv Ricardo
 */

const { promises: fs } = require('fs');
const csvToJson = require('csvtojson');
const open = require('open');
const chalk = require('chalk');
const validCountries = require('../model/includes.json');

const getCountryData = (data, code, anio) => {
    const myCountry = data.find(country => country['Country Code'] === code.toUpperCase())

    if (!myCountry) {
        throw new Error('El codigo de pais o el anio no son validos.')
    }


    return {
        suscripcion: parseFloat(myCountry[anio]),
        codigo: myCountry['Country Code'],
        nombre: myCountry['Country Name'],
        anio
    };


}

const importCSV = async path => {

    const validCodes = validCountries.p_codigo;
    const csvFile = await fs.readFile(path, 'utf-8')
        .catch(err => { throw new Error('El archivo no se encuentra.') })


    let lines = csvFile.split(/\r?\n/);
    let csvString = ''
    lines.filter((value, index) => {
        if (index >= 4) {
            csvString += value + '\n'
        }
    });

    let csvData = await csvToJson().fromString(csvString);
    if (csvData.length === 0) {
        throw new Error('El formato del archivo no es valido.')
    }

    let excludes = []
    csvData = csvData.filter(country => {
        let isValid = validCodes.includes(country['Country Code'])
        if (isValid) {
            return country
        } else {
            excludes.push({
                name: country['Country Name'],
                code: country['Country Code'],
            })
        }

    })

    return csvData;

}

const getAverage = (data, year) => {
    if (isNaN(year)) {
        throw new Error('El año ingresado no es valido.')
    }
    let average = 0;
    let count = 0
    data.forEach(element => {
        let value = parseFloat(element[`${year}`]);
        //console.log(value)
        if (!isNaN(value)) {
            average += value;
            count++
        }
    });
    average = parseFloat((average / count).toFixed(2))
    return average

    /* Validacion del codigo de pais para despues */
    // let country = data.filter(country => country['Country Code'] === countryCode)
    // if (country.length === 0) {
    //     throw new Error(
    //         'El código del pais no es valido, asegurese de usar la especificación ISO 3166 ALPHA-3.')
    // }




}
//Gabriel

const isHigher = (data, year, country, prom) => {
    let answer = false;
    country = country.toUpperCase()
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
        }


    })
    return answer;

}

/**
 * Ricardo
 */
const getSortedData = (data, year) => {
    let dato = [];
    data.forEach(element => {
        let pais = element['Country Name'];
        let suscripciones = parseFloat(element[`${year}`]);
        let codigo = element['Country Code']
        if (isNaN(suscripciones)) {
            suscripciones = 0;
        }
        //console.log(suscripciones);
        dato.push({
            pais,
            codigo,
            suscripciones
        });
    });
    dato.sort(function (a, b) {
        return b.suscripciones - a.suscripciones
    })
    return dato;
}

const getBelowAverage = (data, country, year) => {
    data = getSortedData(data, year);
    const finded = data.find(element => element['codigo'] == country.toUpperCase())
    if (!finded) {
        throw new Error('El código del pais no es valido')
    }
    let index = data.indexOf(finded) + 1
    const paises = data.slice(index, index + 5)
    return paises
}

const getAboveAverage = (data, country, year) => {
    data = getSortedData(data, year);
    const finded = data.find(element => element['codigo'] == country.toUpperCase())
    if (!finded) {

        throw new Error('El código del pais no es valido')
    }
    let index = data.indexOf(finded)
    let paises = data.slice(index - 5, index);
    return paises
}

/**
 * Chino
 */

const getTopFive = (data, year) => {
    data = getSortedData(data, year);
    const paises = []
    for (let i = 0; i <= data.length; i++) {
        if (i <= 4) {
            paises.push(data[i]);
        }
    }
    return paises
}


const saveData = (datos, path) => {
    let date = JSON.stringify(datos, null, 2);
    path = `${path}.json`
    fs.writeFile(path, date, (err) => {
        if (err) throw new Error('NO SE PUDO EL ARCHIVO JSON CON LAS ESTADISTICAS error en el path');
    });
    console.log(
        chalk.cyan('The file has been saved! You can see it in the path: ') +
        chalk.yellow(path));
    open(path).catch(console.log)
}

module.exports = {
    importCSV,
    getCountryData,
    getAverage,
    isHigher,
    getSortedData,
    getBelowAverage,
    getTopFive,
    getAboveAverage,
    saveData
}