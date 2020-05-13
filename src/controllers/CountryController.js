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

const isHigher = (data, year, country, prom) => {
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
    dato.sort(function(a, b) {
        return b.suscripciones - a.suscripciones
    })
    return dato;
}

const getBelowAverage = (data, country, year) => {
    data = getSortedData(data, year);
    const finded = data.find(element => element['codigo'] === country)
    let index = data.indexOf(finded) + 1
    const paises = data.slice(index, index + 5)
    return paises
}

const getAboveAverage = (data, country, year) => {
    data = getSortedData(data, year);
    const finded = data.find(element => element['codigo'] === country)
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
            paises.push({
                pais: data[i].pais,
                suscripciones: data[i].suscripciones
            });
        }
    }
    return paises
}


const saveData = (data, country, year, name) => {
    let estadistica = [];
    let date = JSON.stringify(estadistica);
    fs.writeFile(`${name}`, date, (err) => {
        if (err) throw new Error('NO SE PUDO EL ARCHIVO JSON CON LAS ESTADISTICAS');
        console.log('The file has been saved!');
    });
}

/* pruebas */
const tests = async() => {
    let data = await importCSV('./data.csv')
    let prom = getAverage(data, 2015)
    let top = getAboveAverage(data, 'BOL', 2015) //partiendo desde el pais
    let down = getBelowAverage(data, 'BOL', 2015) //partiendo desde el paise
        // let down = getBelowAverage(data, 'BOL', 2015)
        // console.log(getTopFive(data, 2015))
        //console.log(prom);
        //console.log(isGraderThanAverage(data, 2015, 'ECU', prom));
    saveData(data, 'ECU', 2015, './src/data.json');

}

tests().catch(console.log)