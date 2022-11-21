let {sumar, resta, multiplicar, dividir} = require('./calculadora');

let operacion = process.argv[2];

switch (operacion) {
    case 'sumar':
        let a = Number(process.argv[3]);
        let b = Number(process.argv[4]);
        console.log(sumar(a,b));
        break;
    case 'resta':
        let c = Number(process.argv[3]);
        let d = Number(process.argv[4]);
        console.log(resta(c,d));
        break;
    case 'dividir':
        let e = Number(process.argv[3]);
        let f = Number(process.argv[4]);
        console.log(dividir(e,f));
        break;
    case 'multiplicar':
        let g = Number(process.argv[3]);
        let h = Number(process.argv[4]);
        console.log(multiplicar(g,h));
        break;
    default:
        console.log('No paso orden de operacion');  
}

