#!/usr/bin/env node

/* archivo principal */
// TODO: Chino
const chalk = require('chalk');
const argv = require('./configs/yargs').argv;
const {
    importCSV,
    getAverage,
    getBelowAverage,
    getTopFive,
    getAboveAverage,
    isHigher,
    saveData,
    getCountryData
} = require('./controllers/CountryController')
const server = require('./server');

let comand = argv._[0];

let pais = argv.country
let anio = argv.year
let arch = argv.file
let save = argv.out


let printData = async () => {
    let data = await importCSV(arch)
    let country = getCountryData(data, pais, anio)
    let media = getAverage(data, anio)
    let mayor = isHigher(data, anio, pais, media)

    console.log(chalk.bgBlueBright(chalk.white(chalk.bold("=========================== RESULTADOS OBTENIDOS ===========================\n"))))

    console.log(chalk.cyan(`La media es `) + ` ${chalk.red(media)}`)
    console.log(chalk.cyan(`${chalk.red(country.nombre)} tiene una valor de suscripcion de ${chalk.red(country.suscripcion)} para el año de ${chalk.red(anio)}`))
    if (mayor == true) {
        console.log(`El total de suscripciones de ${chalk.bgBlueBright(country.nombre)} es mayor al valor de la media mundial\n`)
    } else {
        console.log(chalk.cyan(`El total de suscripciones de `) + `${chalk.red(country.nombre)}` + chalk.cyan(` es menor al valor de la media mundial\n`))
    }
    //menores
    let paises5mn = getBelowAverage(data, pais, anio)
    //mayores
    let paises5my = getAboveAverage(data, pais, anio)


    console.log(chalk.bgBlueBright(chalk.white(chalk.bold(`==================== Países por encima del total de `))) + chalk.bgBlueBright(chalk.red(chalk.bold(country.nombre))) + chalk.bgBlueBright(chalk.white(chalk.bold(` ====================`))));
    console.table(paises5my.reverse())
    // paises5my.forEach(element => {
    //     console.log(chalk.green(element.pais))
    // });

    console.log(chalk.bgBlueBright(chalk.white(chalk.bold(`==================== Países por debajo del total de `))) + chalk.bgBlueBright(chalk.red(chalk.bold(country.nombre))) + chalk.bgBlueBright(chalk.white(chalk.bold(` ====================`))));
    console.table(paises5mn)
    // paises5mn.forEach(element => {
    //     console.log(chalk.red(element.pais))
    // });

    let paisesyear = getTopFive(data, anio)
    console.log(chalk.bgBlueBright(chalk.white(chalk.bold(`======================= Top 5 países para el año `))) + chalk.bgBlueBright(chalk.bold.red(anio)) + chalk.bgBlueBright(chalk.white(chalk.bold(` =======================`))));
    console.table(paisesyear);
    // paisesyear.forEach(element => {
    //     console.log(chalk.blue(element.pais))
    // });

    return {
        pais: country,
        mediaPaises: media,
        estaPorEncimaMedia: mayor,
        paisesPorEncima: paises5my,
        paisesPorDebajo: paises5mn,
        topFive: paisesyear
    }
}
printData()
    .then((datos) => {
        // console.log(datos)
        switch (comand) {
            case 'publicar':
                server.startServer(datos)
                    .then(console.log(chalk.cyan(`You can visit the url to see the web page.`)))
                    .catch(err => console.log(chalk.bgRed.bold.white(err)))
                break;
            case 'guardar':
                saveData(datos, save)
                    .catch(err => console.log(chalk.bgRed.bold.white(err)))
                break;
            default:
                console.log('Comando no reconocido');
                break;
        }

    })
    .catch(err => console.log(chalk.bgRed.bold.white(err)))