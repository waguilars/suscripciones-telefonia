<p align="center">
    <a href="https://github.com/WilsonAG/PW-P56-P1/graphs/contributors" alt="Contributors">
        <img src="https://img.shields.io/static/v1?label=Equipo&message=Universidad_Politecnica_Salesiana&color=blue" /></a>
    <a href="https://github.com/WilsonAG/PW-P56-P1/blob/master/LICENSE.md">
        <img src="https://img.shields.io/github/license/WilsonAG/PW-P56-P1?color=green&logoColor=black&style=flat-square" /></a>
    <a href="https://github.com/WilsonAG/PW-P56-P1/network">
        <img src="https://img.shields.io/github/forks/WilsonAG/PW-P56-P1" /></a>
    <a href="https://github.com/WilsonAG/PW-P56-P1/stargazers">
        <img src="https://img.shields.io/github/stars/WilsonAG/PW-P56-P1?color=yellow"></a>
    <a href="https://github.com/WilsonAG/PW-P56-P1/commits/master">
        <img src="https://img.shields.io/badge/Commits-52-red"></a>
        
</p>


# Universidad Politécnica Salesiana

### Proyecto Plataformas Web

  

Aplicación en NodeJS que permita leer los datos de las Suscripciones a telefonía celular móvil, publicadas por el Banco Mundial y publicar las estadísticas de un determinado país en un año específico.

Los archivos del proyecto se han realizado para una mejor manipulación y estructura de la aplicación **Modelo, Vista, Controlador**

## Primer paso 🚀

Lo primero en nuestro proyecto clonar el proyecto de Git en el directorio que deseamos.

  

### Pre-requisitos 📋

#### Archivo CSV

Un archivo indispensable para la ejecución debemos descargar los datos csv a consultar de la siguiente pagina: [https://datos.bancomundial.org/indicador/IT.CEL.SETS](https://datos.bancomundial.org/indicador/IT.CEL.SETS)



## Instalacion
NodeJS nos permite ejecutar un proyecto de manera rápida únicamente instalando los paquetes y las dependencias que necesita nuestro proyecto de la siguiente forma 

**Primer paso** 
Inicial izar y clonar nuestro repositorio en su entorno para ellos nos dirigimos a la pagina del proyecto en git y copiamos la dirrecion del repositorio
![Descripcion del repositorio](https://help.github.com/assets/images/help/repository/remotes-url.png)
**Segundo paso** 
Luego de copiado el enlace nos dirigimos a nuestra terminal y colocamos git clone seguido del; enlace copiado ej:
```
git clone https://github.com/WilsonAG/PW-P56-P1.git
```
Se cargaran los archivos correspondientes para nuestro proyecto.
**Tercer paso**
#### Librerías

Ejecutar el siguiente comando el cual instalara los módulos necesarios para su correcto funcionamiento ya que los módulos no vienen en el modulo de git ya que ocupa espacio en memoria de nuestro proyecto y también nos ayuda a verificar el funcionamiento de las librerías:
```

npm install

```
## Modo de uso 
En esta aplicacion se utiliza una invocacion por consola la cual constara de la siguiente estructura ubicandonos en el proyecto:
``` 
node src/app.js [comando] [argumento 1] [argumento 2][argumento 3]
```
## Comandos 🔌

#### publicar:

Este comando publicará las estadísticas en una página web básica. Se requieren de tres parámetros.

*  **-- file -f**: Permite establecer el path del archivo CSV que contiene los datos a analizar.

*  **-- country -c**:Permite determinar el país a analizar a través de su código [ISO 3166 ALPHA-3.]([[https://laendercode.net/es/3-letter-list.html](https://laendercode.net/es/3-letter-list.html))

*  **-- year -y**: Permite especificar el año para el cual se requiere las estadísticas. Por defecto, 2018.

⚙️**Ejemplo de ejecución:**

Enviando año como parámetro

```

node src\app.js publicar -f "[direccion del archivo csv]" -c "ECU" -y 2015

```

Sin año como parámetro

```

node src\app.js publicar -f "[direccion del archivo csv]" -c "ECU"

```

#### guardar

Este comando almacenará los resultados de las estadísticas en un archivo **json**. Recibe los mismos parámetros que el comando anterior, y se adiciona la siguiente opción

*  **-- out -o**: Establece el nombre del archivo donde se almacenará los resultados.

⚙️**Ejemplo de ejecución:**

```

node src\app.js guardar -o"[direccion a guardar]"

```

  
  
  

## Construido con 🛠️

Las siguientes herramientas fueron usadas para la creación del proyecto

  

*  [NodeJS](https://nodejs.org/es/) - entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome.
*  [Chalk](https://www.npmjs.com/package/chalk) - Permite determinar y establecer colores a la salida del terminal para visualizar resultados de mejor manera.
 *[Yargs](https://www.npmjs.com/package/yargs)- Yargs te ayuda a crear herramientas interactivas de línea de comandos, analizando argumentos y generando una elegante interfaz de usuario.
  *[Open](https://www.npmjs.com/package/open)-Utilizado para abrir cosas como URL, archivos, ejecutables. Multiplataforma.
Está destinado a usarse en herramientas de línea de comandos y scripts, no en el navegador.


## Autores ✒️

  

Los siguientes autores son estudiantes de la Universidad Politécnica Salesiana de la Carrera de Ingeniería en Ciencias de la Computación:

  

*  **Aguilar Wilson** - *Estudiante UPS* - [WilsonAG](https://github.com/WilsonAG)

*  **Cacuango Gabriel** - *Estudiante UPS* - [GabrielCacuango07](https://github.com/GabrielCacuango07)

*  **Imbaquingo Bryan** - *Estudiante UPS* - [bimbaquingoch](https://github.com/bimbaquingoch)

*  **Romo Ricardo** - *Estudiante UPS* - [rromom](https://github.com/rromom)

* También puedes mirar la lista de todos los [contribuyentes](https://github.com/WilsonAG/PW-P56-P1/graphs/contributors) quienes han participado en este proyecto.

## Licencia 📄

  

Este proyecto está bajo la Licencia (GNU3) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

  

* Invita una cerveza 🍺 o un chifa 🐶 🍝 a alguien del equipo.

* Donaciones a la cuenta RRomo :0214578545 cuenta de ahorros 🤓💰.