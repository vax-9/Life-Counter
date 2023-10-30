const myLife = document.querySelector('#my-life')
const myIncreaser = document.querySelector('#my-increaser')
const myDecreaser = document.querySelector('#my-decreaser')

const opponentLife = document.querySelector('#opponent-life')
const opponentIncreaser = document.querySelector('#opponent-increaser')
const opponentLDecreaser = document.querySelector('#opponent-decreaser')

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

myIncreaser.addEventListener('click', ()=>{
  event.preventDefault
  myLife.innerHTML ++
})

myDecreaser.addEventListener('click', ()=>{
  myLife.innerHTML --
})

opponentIncreaser.addEventListener('click', ()=>{
  opponentLife.innerHTML ++
})

opponentLDecreaser.addEventListener('click', ()=>{
  opponentLife.innerHTML --
})

resetButton.addEventListener('click', ()=> {
  Reset();
})


