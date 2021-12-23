const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
let count = 0;

function jump(){
    if(dino.classList !="jump"){
    dino.classList.add('jump');
    setTimeout(function(){
        dino.classList.remove('jump');
    }, 300);
    }
}

document.addEventListener('keydown', function(event){
    jump();
})

let isAlive = setInterval(function(){
    //dino Y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    //cactus x position
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    
    //collision
    if (cactusLeft <50 && cactusLeft >0 && dinoTop >= 140){
        //alert('Game over')
        document.querySelector('.game-over').classList.add('game-over2');
        document.querySelector('.restart').classList.add('restart2');
        clearInterval(intervalID);
    } 
}, 10);

//restart the game
const restart = document.querySelector('.restart');

restart.addEventListener('click', function(){
            window.location.reload()
        })

//score 

window.addEventListener('DOMContentLoaded', function(){
    intervalID = setInterval(function(){
        count+=1;
        document.querySelector('.score').innerHTML = "Score : " + count;
    }, 60);
})  
