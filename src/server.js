const http = require('http');
const open = require('open');
const chalk = require('chalk');

const hostname = '127.0.0.1';
const port = 3000;



const startServer = async(data) => {
    //console.log(data)
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

</head>

<body>
    <!-- Just an image -->
    <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Plataformas Web - Proyecto IB</a>
    </nav>

    <div class="container">
        <h1 class="text-center my-3">Datos estadisticos</h1>
        <h3>Resultados para el año: ${data.pais.anio}</h3>
        <p>Valor de la media: <span>${data.mediaPaises}</span> </p>
        <p>Valor de subscripcion es mayor a la media??: <span>${data.estaPorEncimaMedia}</span> </p>
        <h3>Pais especificado: <span>${data.pais.nombre}</span> - Suscripcion: ${data.pais.suscripcion}</h3>
        <p>Paises por encima del valor de la subscripcion</p>
        <ol>
        `)

        data.paisesPorEncima.forEach(element => {
            res.write(`<li>${element.pais} con suscripcion de ${element.suscripciones}</li >`)
        });


        res.write(
            ` </ol >
            <p>Paises por debajo del valor de la subscripcion</p>
            <ol>`
        )

        data.paisesPorDebajo.forEach(element => {
            res.write(`<li>${element.pais} con suscripcion de ${element.suscripciones}</li >`)
        });

        res.write(`
        </ol >
        <p>Top 5 paises</p>
        <ol>
        `)
        data.topFive.forEach(element => {
            res.write(`<li>${element.pais} con suscripcion de ${element.suscripciones}</li >`)
        });

        res.write(`
        </ol >
    
        </div >

    <footer class="bg-dark text-white position-relative text-center" style="bottom: 0;">
        <p>&copy; Universidad Politecnica Salesiana</p>
        <ul class="mh-100" style="list-style: none;">
            <li>Wilson Aguilar</li>
            <li>Gabriel Cacuango</li>
            <li>Bryan Imbaquingo</li>
            <li>Ricardo Romo</li>
        </ul>
    </footer>
    </body >
    </html >

    `)



        res.end()
    });

    server.listen(port, hostname, async() => {
        console.log(chalk.cyan(`Server running at ${
            chalk.underline.yellow(
                'http://${hostname}:${port}/')
            } `));

        await open(`http://${hostname}:${port}/`);
        //server.close();
    });
}


module.exports = {
    startServer
}