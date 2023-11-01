const myIncreaser = document.createElement('div')
const myLife = document.createElement('span')
const myDecreaser = document.createElement('div')
const player1 = document.querySelector('.white')

const opponentLife = document.createElement('span')
const opponentIncreaser = document.createElement('div')
const opponentDecreaser = document.createElement('div')
const player2 = document.querySelector('.black')

Generate(myIncreaser,'life-increaser', '+', player1)
Generate(myLife, 'actual-life', '0', player1)
Generate(myDecreaser, 'life-decreaser', '-', player1)

Generate(opponentIncreaser, 'life-increaser', '+', player2)
Generate(opponentLife, 'actual-life', '0', player2)
Generate(opponentDecreaser, 'life-decreaser', '-', player2)

const startingLife = document.querySelector ('#set-starting-life')
const resetButton = document.querySelector ('button')

function Reset() {
  if (startingLife.value ==='' ){
    myLife.innerHTML = 0
    opponentLife.innerHTML = 0 
    return
  } else {
    myLife.innerHTML = startingLife.value
    opponentLife.innerHTML = startingLife.value
    return
  }
}

function Generate(elem, style, text, player) {
  elem.classList = style
  elem.innerHTML = text
  player.appendChild(elem)
  return
}

document.addEventListener('click', (e)=>{
  if (e.target.matches('.life-increaser')) {
      e.target.nextElementSibling.innerHTML++
  } else if (e.target.matches('.life-decreaser')) {
    e.target.previousElementSibling.innerHTML--
  } else if (e.target === resetButton) {
    Reset()
  }
})



