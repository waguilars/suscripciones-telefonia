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
            res.write(`<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.css" media="screen">
        </head>
        
        <body>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <a class="navbar-brand" href="#">
            Plataformas Web - Proyecto IB
            </a>
            </nav>
            <div class="jumbotron">
                <h1 class="text-center">DATOS ESTADÍSTICOS</h1>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card border-success mb-4 zoom " style="max-width: 25rem;">
                            <div class="card-header">Año ${data.pais.anio}</div>
                            <div class="card-body">
                                <h4 class="card-title">Media Suscripciones</h4>
                                <p class="card-text">${data.mediaPaises}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card border-success mb-4 zoom" style="max-width: 25rem;">
                            <div class="card-header">País: ${data.pais.nombre}</div>
                            <div class="card-body">
                                <h4 class="card-title">Suscripciones</h4>
                                <p class="card-text">${data.pais.suscripcion}
                                    <p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card border-success mb-4 zoom" style="max-width: 25rem;">
                            <div class="card-header">Estado</div>
                            <div class="card-body">
                                <h4 class="card-title">¿Mayor a la media?</h4>
                                <p class="card-text">${data.estaPorEncimaMedia}
                                    <p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <h4>Paises por encima del valor de la subscripcion</h4>
                    `)
            res.write(`<table class="table table-hover">
        <thead>
            <tr class="table-success">
                <th scope="row">#</th>
                <td>Pais</td>
                <td>Suscripciones</td>
            </tr>
        </thead>
        <tbody>`)
            let con1 = 0;
            data.paisesPorEncima.forEach(element => {
                con1 += 1
                res.write(`<tr>
                 <th scope = "row" > ${con1} </th> 
                 <td>${element.pais}</td> 
                 <td>${element.suscripciones}</td> </tr> `)
            });
            res.write(`</tbody>
    </table> 
    <h4>Paises por debajo del valor de la subscripcion</h4>

<table class="table table-hover">
            <thead>
                <tr class="table-danger">
                    <th scope="row">#</th>
                    <td>Pais</td>
                    <td>Suscripciones</td>
                </tr>
            </thead>
            <tbody>`);
            con1 = 0
            data.paisesPorDebajo.forEach(element => {
                con1 += 1
                res.write(`<tr>
            <th scope="row">${con1}</th>
            <td>${element.pais}</td>
            <td>${element.suscripciones}</td>
        </tr>`)
            });

            res.write(` </tbody>
            </table>  
            <h4>Top 5 paises</h4>
        
        <table class="table table-hover">
            <thead>
                <tr class="table-success">
                    <th scope="row">#</th>
                    <td>Pais</td>
                    <td>suscripciones</td>
                </tr>
            </thead>
            <tbody>`);
            con1 = 0
            data.topFive.forEach(element => {
                con1 += 1;
                res.write(` <tr>
            <th scope="row">${con1}</th>
            <td>${element.pais}</td>
            <td> ${element.suscripciones}</td>
        </tr>`)
            });
            res.write(` </tbody>
            </table>
            </div>
            </div>
            <footer class="bg-dark bg-primary d-flex flex-column text-center">
            © Universidad Politecnica Salesiana
    
            <ol style="list-style:none;">
    
                <li>Aguilar Wilson</li>
    
                <li>Cacuango Gabriel</li>
    
                <li>Imbaquingo Bryan</li>
    
                <li>Romo Ricardo</li>
            </ol>
        </footer>
        <style>
        .zoom {
            transition: transform .2s;
        }
        
        .zoom:hover {
            transform: scale(1.05);
            /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
        }
    </style>
                </body>
                
                </html>`);
            res.end()
        });

        server.listen(port, hostname, async() => {
                    console.log(chalk.cyan(`Server running at ${
            chalk.underline.yellow(
                `http://${hostname}:${port}/`)
            } `));

        await open(`http://${hostname}:${port}/`);
        //server.close();
    });
}


module.exports = {
    startServer
}