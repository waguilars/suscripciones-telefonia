/* archivo principal */
// TODO: Chino
const chalk = require('chalk');
const argv = require('./configs/yargs').argv;
const { importCSV, getAverage, getBelowAverage, getTopFive, getAboveAverage, getSortedData, isHigher, saveData } = require('./controllers/CountryController')
const server = require('./server');

let comand = argv._[0];

let pais = argv.country
let anio = argv.year
let arch = argv.file
let save = argv.out

console.log(arch)
console.log(pais)
console.log(anio)

let printData = async() => {
    let data = await importCSV(arch)
    let media = getAverage(data, anio)
    let mayor = isHigher(data, anio, pais, media)

    console.log(chalk.bgBlueBright(chalk.white(chalk.bold("=========================== RESULTADOS OBTENIDOS ===========================\n"))))

    console.log(chalk.cyan(`La media es `) + ` ${chalk.red(media)}`)
    if (mayor == true) {
        console.log(`El total de suscripciones de ${chalk.bgBlueBright(pais)} es mayor al valor de la media mundial\n`)
    } else {
        console.log(chalk.cyan(`El total de suscripciones de `) + `${chalk.red(pais)}` + chalk.cyan(` es menor al valor de la media mundial\n`))
    }
    //menores
    let paises5mn = getBelowAverage(data, pais, anio)
        //mayores
    let paises5my = getAboveAverage(data, pais, anio)


    console.log(chalk.bgBlueBright(chalk.white(chalk.bold(`==================== Países por encima del total de `))) + chalk.bgBlueBright(chalk.red(chalk.bold(pais))) + chalk.bgBlueBright(chalk.white(chalk.bold(` ====================`))));
    //console.log(paises5my);
    paises5my.forEach(element => {
        console.log(chalk.green(element.pais))
    });

    console.log(chalk.bgBlueBright(chalk.white(chalk.bold(`==================== Países por debajo del total de `))) + chalk.bgBlueBright(chalk.yellow(chalk.bold(pais))) + chalk.bgBlueBright(chalk.white(chalk.bold(` ====================`))));
    paises5mn.forEach(element => {
        console.log(chalk.red(element.pais))
    });

    let paisesyear = getTopFive(data, anio)
    console.log(chalk.bgBlueBright(chalk.white(chalk.bold(`======================= Top 5 países para el año `))) + chalk.bgBlueBright(chalk.green(chalk.bold(anio))) + chalk.bgBlueBright(chalk.white(chalk.bold(` =======================`))));

    paisesyear.forEach(element => {
        console.log(chalk.blue(element.pais))
    });
}

printData()

switch (comand) {
    case 'publicar':
        //getAverage(arch, anio)

        break;
    case 'guardar':
        console.log('guardar los resultados');
        break;
    default:
        console.log('Comando no reconocido');
        break;
}