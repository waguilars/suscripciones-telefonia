/* archivo principal */
// TODO: Chino

const argv = require('./configs/yargs').argv;
const { importCSV, getAverage } = require('./controllers/CountryController')
const server = require('./server');



let comand = argv._[0];

console.log(argv.file)
importCSV(argv.file)
    .then(data => {
        let a = getAverage(data, argv.year)
        console.log(a)

    })
    .catch(console.log)


switch (comand) {
    case 'publicar':
        const data = {
            media: 'media',
            top: [1, 2, 3, 4, 5]
        }
        server.startServer(data)
        break;
    case 'guardar':
        console.log('guardar los resultados');
        break;
    default:
        console.log('Comando no reconocido');
        break;
}