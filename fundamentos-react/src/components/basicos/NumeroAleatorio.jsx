import React from 'react';

export default (props) => {

    function geraNumeros(quantidade) {
        let numerosGerados = [];
        let count = 0;
        while (count < quantidade) {
            const random = parseInt(Math.random() * (60 + 1 - 1) + 1);
            if(numerosGerados.indexOf(random) === -1) {
                numerosGerados.push(random)
                count++;
    
            }
        }
        return numerosGerados.sort((a, b) => a - b);
    }
    console.log(geraNumeros(7));

    // function gerarNumeroNaoContido(min, max, array) {
//     const aleatorio = parseInt(Math.random() * (max + 1 - min) + min);
//     return array.includes(aleatorio) ? 
//         gerarNumeroNaoContido(min, max, array) :
//         aleatorio;
// }


// function geraNumerosDois(qtde) {
//     const numeros = Array(qtde)
//         .fill(0)
//         .reduce(nums => {
//             const novoNumero = gerarNumeroNaoContido(1, 60, nums);
//             return [...nums, novoNumero];
//         }, [])
//         .sort((n1, n2) => n1 - n2);
//     return numeros;
// }

// console.log(geraNumerosDois(7));

    const {min, max} = props;
    const random = parseInt(Math.random() * (max - min) + min);
    return (
        <>
            <p>Valor mínimo: {min}</p>
            <p>Valor máximo: {max}</p>
            <p>Valor escolhido: {random}</p>
        </>
    );
};