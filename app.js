const { crearArchivo } = require('./helpers/multiplicar.js');
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .option('l', {
        alias: 'list',
        demandOption: true,
        default: false,
        type: 'boolean'
    })
    .option('h', {
        alias: 'hasta',
        default: 10,
        type: 'number'
    })
    .check((argv, options) => {

        if (isNaN(argv.b)) {
            throw 'El valor ingresado debe ser un numero';
        }
        return true;
    })
    .argv;

console.clear();

console.log(argv);




crearArchivo(argv.base, argv.l, argv.h)
    .then(nombre => console.log(nombre))
    .catch(err => {
        console.log(err)
    })