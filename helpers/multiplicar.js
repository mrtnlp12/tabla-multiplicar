const fs = require('fs');
let colors = require('colors');

const crearArchivo = async(base = 5, listar, hasta) => {

    let salida = ''

    for (let i = 1; i <= hasta; i++) {
        salida += `${base} x ${i} = ${base*i}\n`;
    }

    if (listar) {
        console.log('================================'.green)
        console.log('TABLA DE MULTIPLICAR DEL ', base)
        console.log('================================'.green)
        console.log(salida);
    }

    try {

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`.rainbow;

    } catch (error) {

        throw error;

    }
}

module.exports = {
    crearArchivo
}