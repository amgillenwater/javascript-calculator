// identify the display
// identify all the buttons, add event listeners to them
// when buttons are clicked, edit innertext of the display equal to the innertext of the button
// when equals is clicked, use eval to evaluate string in innertext of display

const screen = document.querySelector('#display')
console.log(screen)

const buttons = document.querySelectorAll('.calc-button')
console.log(buttons)

const clear = document.querySelector('#c')
console.log(clear)

const equals = document.querySelector('#equals')

for (const button of buttons) {
  button.addEventListener('click', function () {
    const newElement = document.createElement('span')
    const text = document.createTextNode(button.innerText)
    newElement.appendChild(text)
    screen.appendChild(newElement)
    console.log(screen.innerText)
  })
}

clear.addEventListener('click', function () {
  screen.innerText = ''
})

equals.addEventListener('click', function () {
  screen.innerText = eval(screen.innerText)
})
