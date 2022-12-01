console.log('===================================================')
console.log('Function Soma')

function soma(primeiroArgumento, ...argumentos) {
    console.log({primeiroArgumento})
    console.log({argumentos})

}

soma(1, 2, 3,4, 5, 6, 7)
console.log('===================================================')
console.log('Function Subtracao')


const subtracao = () => {   
    console.log(arguments)

}

subtracao(1, 2, 3,4, 5, 6, 7)

console.log('===================================================')

