const opts = {
    base: {
        demand: true, //para que el dato sea obligatorio
        alias: 'b' // un alias
    },
    limite: {
        alias: 'l',
        default: 10 //dato default
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;





module.exports = {
    argv

}