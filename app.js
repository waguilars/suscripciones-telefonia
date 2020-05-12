/* archivo principal */
// TODO: Chino

const argv = require('./src/configs/yargs').argv;
const tareas = require('./src/controllers/CountryController')

let comand = argv._[0];

switch (comand) {
    case 'publicar':
        console.log('pagina web ');
        break;
    case 'guardar':
        console.log('guardar los resultados');
        break;
    default:
        console.log('Comando no reconocido');
}