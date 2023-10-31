const myIncreaser = document.createElement('div')
const myLife = document.createElement('span')
const myDecreaser = document.createElement('div')
const myWrapper = document.querySelector('.white')

myIncreaser.classList = 'life-increaser'
myIncreaser.innerHTML = '+'
myLife.classList = 'actual-life'
myLife.innerHTML = '0'
myDecreaser.classList = 'life-decreaser'
myDecreaser.innerHTML = '-'

myWrapper.appendChild(myIncreaser)
myWrapper.appendChild(myLife)
myWrapper.appendChild(myDecreaser)

const opponentLife = document.createElement('span')
const opponentIncreaser = document.createElement('div')
const opponentDecreaser = document.createElement('div')
const opponentWrapper = document.querySelector('.black')

opponentIncreaser.classList = 'life-increaser'
opponentIncreaser.innerHTML = '+'
opponentLife.classList = 'actual-life'
opponentLife.innerHTML = '0'
opponentDecreaser.classList = 'life-decreaser'
opponentDecreaser.innerHTML = '-'

opponentWrapper.appendChild(opponentIncreaser)
opponentWrapper.appendChild(opponentLife)
opponentWrapper.appendChild(opponentDecreaser)

const players = document.querySelectorAll('.player-counter')
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

myWrapper.addEventListener('click', (e)=>{
  if (e.target.matches('.life-increaser')) {
      myLife.innerHTML++
  } else if (e.target.matches('.life-decreaser'))
    myLife.innerHTML--
})

opponentWrapper.addEventListener('click', (e)=>{
  if (e.target.matches('.life-increaser')) {
    opponentLife.innerHTML++
  } else if (e.target.matches('.life-decreaser'))
    opponentLife.innerHTML--
})

resetButton.addEventListener('click', ()=> {
  Reset();
})


