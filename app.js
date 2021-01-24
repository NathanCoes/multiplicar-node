const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearTabla, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearTabla(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ', colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido'.red);
}



// let base = "4";

// console.log(process.argv);

// let argv2 = process.argv;

// console.log('Limite', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];



// node app --base = 7