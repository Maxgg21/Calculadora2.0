// Sumar
let sumar = (n1,n2) => n1 + n2;

// Resta
let resta = (n1,n2) => n1 - n2;

// Multiplicar 
let multiplicar = (n1,n2) => n1 * n2;

// Dividir 
let dividir = (n1,n2) => {
    if(n1 === 0 || n2 === 0){
        return 'No se puede dividir por 0'
    };
    return n1 / n2;
}

// module.exports = sumar;
// module.exports = resta;
// module.exports = multiplicar;
// module.exports = dividir;


module.exports = {
    sumar,
    resta,
    dividir,
    multiplicar
}