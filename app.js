//requireds
const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];


switch (comando) {

    case 'listar':
        //console.log(`${argv.base}, ${argv.limite}`);
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`El archivo creado ${archivo}`);
        }).catch(err => {
            console.log(err);
        });

        break;

    default:
        console.log('comando no reconocido');

}


/*
se toman los datos que se envian desde la consola con process.argv,
ejemplo: node app --base=5, donde app es el nombre del archivo el cual
recibira los datos y base es la parte donde se pone el valor */


//console.log(argv.limite);
//console.log(argv2);

/*let parametro = argv[2];

let base = parametro.split('=')[1];

//console.log(base);


*/