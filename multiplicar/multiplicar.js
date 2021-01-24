// Requires

const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('=================================='.green);
    console.log(`   ======== Tabla de ${base} ========`.green);
    console.log('=================================='.green);
    for (let m = 1; m <= limite; m++) {
        console.log(`${base} x ${m} = ${base * m}\n`);
    }
}

// module.exports.crearTabla = (base) => {
crearTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`.red);
            return;
        }

        let data = '';

        for (let m = 1; m <= limite; m++) {
            data += (`${base} x ${m} = ${base * m}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`Tabla-${base}.txt`);
        });

    });
}

module.exports = {
    crearTabla,
    listarTabla
}