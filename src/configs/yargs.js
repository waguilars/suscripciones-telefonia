/* Configuraciones de yargs */
// TODO: Gabriel
const argv = require('yargs')
    .command('publicar', ' Publica las estadisticas de una pagina web', {
        file: {
            requiere: true,
            alias: 'f',
            desc: ' Permite establecer el path del archivo CSV que contiene los datos a analizar'
        },
        country: {
            require: true,
            alias: 'c',
            desc: ' Permite determinar el país a analizar a través de su código ISO 3166 ALPHA-3 '
        },
        year: {
            requiere: true,
            alias: 'y',
            default: '2018',
            desc: ' Permite especificar el año para el cual se requiere las estadísticas. Por defecto, 2018'
        }
    })
    .command('guardar', 'Almacena los resultados de las estadisticas de un archivo', {
        out: {
            requiere: true,
            alias: 'o',
            desc: 'Establece el nombre del archivo donde se almacenará los resultados'
        }
    })
    .help()
    .demandCommand(1)
    .alias('h', 'help')
    .argv;


module.exports = {
    argv
}