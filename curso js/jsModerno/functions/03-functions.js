console.log('===================================================')
console.log('Function Subtracao')
console.log('')

const subtracao = () => {   
    console.log('Corpo da funcao')

}
subtracao()

console.log('===================================================')
console.log('Function Print')
console.log('')

const print = () =>  'Hello World!'

console.log(print())

console.log('===================================================')
console.log('Function Print 2')
console.log('')

const algumNumero = 10
const print2 = () =>  (
    algumNumero >= 10
    ? 'Maior ou igual a 10'
    : 'Menor que 10'
)

console.log(print2())

console.log('===================================================')
console.log('Function Object')
console.log('')

const obj = () =>  ({
    id: '123',
    name: 'Herbert'
})

console.log(obj())

console.log('===================================================')