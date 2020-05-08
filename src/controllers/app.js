/* archivo principal */
// TODO: Chino

const argv = require('./src/configs/yargs').argv;
const tareas = require('./src/controllers/CountryController')
const colors = require('colors');

let comand = argv._[0];

switch (comand) {
    case 'publicar':

        break;
    case 'guardar':

        break;
    default:
        console.log('Comando no reconocido');
}