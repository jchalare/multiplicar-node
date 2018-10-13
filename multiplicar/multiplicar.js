const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {

    //console.log(`${base} X ${limite}`);
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} X ${i}`);
    }

}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`);
            return;
        }

        let datos = '';

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} x ${i} = ${base*i}`);
            datos += `${base} x ${i} = ${base*i}\n`;
        }

        const data = new Uint8Array(Buffer.from(datos));
        fs.writeFile(`tablas/tabla-${base}-hasta-${limite}.txt`, data, (err) => {
            if (err) {
                reject(colors.red(err));
            } else {
                resolve(colors.green(`tabla-${base}-hasta-${limite}.txt`));
            }

        });
    });
}



module.exports = {
    crearArchivo,
    listarTabla,

}