/* archivo principal */
// TODO: Chino

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
    console.log("========================== RESULTADOS OBTENIDOS ==========================\n")
    console.log(`La media es  ${media}`)
    if (mayor == true) {
        console.log(`El total de suscripciones de ${pais} es mayor al valor de la media mundial\n`)
    } else {
        console.log(`El total de suscripciones de ${pais} es menor al valor de la media mundial\n`)
    }
    //menores
    let paises5mn = getBelowAverage(data, pais, anio)
        //mayores
    let paises5my = getAboveAverage(data, pais, anio)
    console.log(`=================== Países por encima del total de ${pais} ===================`);
    console.log(paises5my);
    console.log(`=================== Países por debajo del total de ${pais} ===================`);
    console.log(paises5mn);

    let paisesyear = getTopFive(data, anio)
    console.log(`======================== Top 5 países para el ${anio} ========================`);
    console.log(paisesyear);
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