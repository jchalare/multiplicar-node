//requireds

const fs = require('fs');



let base = 10;


let datos = '';

for (let i = 1; i <= 10; i++) {
    console.log(`${base} x ${i} = ${base*i}`);
    datos += `${base} x ${i} = ${base*i}\n`;
}

const data = new Uint8Array(Buffer.from(datos));
fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}.txt ha sido creado!`);
});