
//Function
function myFunction() {
    //este
    this.name = 'Herbert'

    //Arrow Function
    const myArrowFunction = () => {
    this.name = 'Herbert'
    }
    myArrowFunction()
}
console.log( new myFunction())
console.log(this)


