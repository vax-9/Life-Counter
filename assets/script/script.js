const myIncreaser = document.createElement('div')
const myLife = document.createElement('div')
const myDecreaser = document.createElement('div')
const player1 = document.querySelector('.white')

const opponentLife = document.createElement('div')
const opponentIncreaser = document.createElement('div')
const opponentDecreaser = document.createElement('div')
const player2 = document.querySelector('.black')

GenerateElement(myIncreaser,'life-increaser', '+', player1)
GenerateElement(myLife, 'actual-life', '0', player1)
GenerateElement(myDecreaser, 'life-decreaser', '-', player1)

GenerateElement(opponentIncreaser, 'life-increaser', '+', player2)
GenerateElement(opponentLife, 'actual-life', '0', player2)
GenerateElement(opponentDecreaser, 'life-decreaser', '-', player2)

const startingLife = document.querySelector ('#set-starting-life')
const resetButton = document.querySelector ('button')

function Reset() {
  if (startingLife.value ==='' ){
    myLife.innerHTML = 0
    opponentLife.innerHTML = 0 
  } else {
    myLife.innerHTML = startingLife.value
    opponentLife.innerHTML = startingLife.value
  }
}

function GenerateElement(elem, style, text, player) {
  elem.classList = style
  elem.innerHTML = text
  player.appendChild(elem)
}


document.body.addEventListener('click', (e)=>{
  if (e.target.matches('.life-increaser')) {
    e.target.nextElementSibling.innerHTML++
  } else if (e.target.matches('.life-decreaser')) {
    e.target.previousElementSibling.innerHTML--
  } else if (e.target === resetButton) {
    Reset()
  }
})
