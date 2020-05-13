/* archivo principal */
// TODO: Chino

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const argv = require('./configs/yargs').argv;
const tareas = require('./controllers/CountryController')

let comand = argv._[0];
let objeto = []


switch (comand) {
    case 'publicar':
        objeto.push({
            file: argv.file,
            country: argv.country,
            year: argv.year
        })
        const server = http.createServer((req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(`${objeto[0].file}`)
        });
        server.listen(port, hostname, () => {
            console.log(`Server running at http://${hostname}:${port}/`);
            //server.close();
        });
        break;
    case 'guardar':
        console.log('guardar los resultados');
        break;
    default:
        console.log('Comando no reconocido');
        break;
}