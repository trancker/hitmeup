const square = document.querySelectorAll('.square')
const corona = document.querySelectorAll('.corona')
const timeLeft = document.querySelector('#time-left')
let score =  document.querySelector('#score')

let result =0

let currentTime = timeLeft.textContent
function randomSquare(){
    square.forEach(className =>{
        className.classList.remove('corona')
    })
    let randomPosition = square[Math.floor(Math.random()*9)]
    //setAttribute won't work here as we want to add a class 
    randomPosition.classList.add('corona')

    hitPosition = randomPosition.id
}

square.forEach(id =>{
    id.addEventListener('mouseup',()=>{
        if(id.id=== hitPosition){
            result = result+1
            score.textContent = result
        }
        
    })
})

function moveCorona(){
    let timerId = null
    timerId = setInterval(randomSquare, 500)
}
moveCorona()

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime
    if (currentTime===0){
        clearInterval(timerId)
        alert('Game Over \n Your score is :'+ result)
    }
}
    let timerId = setInterval(countDown ,1000)

    

