 const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const zero = document.querySelector('.zero')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const times = document.querySelector('.times')
const divide = document.querySelector('.divide')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')
const result = document.querySelector('#result')


let values = ' '

const clicker = function(btn) {
    btn.addEventListener('click', event => {
        event.preventDefault()
   let value = event.target.outerText
   values += value
   result.textContent = values
  
    })
}
 equals.addEventListener('click', event => {
    event.preventDefault()
    
    result.textContent = eval(values)
})


clear.addEventListener('click', event => {
     event.preventDefault()
     result.textContent = '';
     values = ''
 })



clicker(one)
clicker(two)
clicker(three)
clicker(four)
clicker(five)
clicker(six)
clicker(seven)
clicker(eight)
clicker(nine)
clicker(zero)
clicker(plus)
clicker(minus)
clicker(times)
clicker(divide)
// final(equals)