'use strict';
// document.querySelector('.message').textContent;
         //This line selects the class  //this selects content
//DOM automatically created by browser when we loads html
//DOM->Document object model it helps us to interact with HTML and CSS
//DOM is stored in a like tree structure in this tree each HTML element is one object 
//Document object entry point for DOM
//And HTML is the child element of document object
//and body and head are both child element of HTML and they are both siblings of each other
//DOM and DOM methods are actually part web APIs(Libraries)




//Changing content 
// document.querySelector('.message').textContent = 'Hurray!! You Guessed it right!!🎉🎈💃';
//To change value of the input field
// document.querySelector('.guess').value = 23;
//to logging this value to console 
// console.log(document.querySelector('.guess').value)




let secretNumber = (Math.trunc((Math.random())*20)) + 1;
console.log(secretNumber);
//Implimenting secret number on site



// function scoreminus(){                                            //there is a better for doing this exact samething
//     document.querySelector('.score').textContent -= 1;
// }
let score = 20 ; 
let highscore = 0 ;
//Handling click events
  //listening to events

document.querySelector('.check').addEventListener('click',function(){
   const guess = Number(document.querySelector('.guess').value);
if (!guess){
       document.querySelector('.message').textContent = '🔴Not a Number!';
       
} else if (guess === secretNumber){
       document.querySelector('.message').textContent = '🎉💃Hurray Correct Number!';
       document.querySelector('body').style.backgroundColor = '#4CD403'; //We use camel case notation if we using css property of two words
       document.querySelector('.number').style.width = '30rem';
       document.querySelector('.number').textContent = secretNumber; 
       if (score > highscore){
       highscore = score };
       document.querySelector('.highscore').textContent = highscore;
} else if (guess !== secretNumber){
        if (score > 1){
                    document.querySelector('.message').textContent = guess > secretNumber ? '📈Too High' : '📉Too Low';
                //    scoreminus();
                    score--;
                    document.querySelector('.score').textContent = score;
        } else{
                    document.querySelector('.message').textContent = '💥You Lost the Game';
                    document.querySelector('.score').textContent = 0;
                   } 
    }
    
    
    })
// } else if (guess > secretNumber){
//         if (score > 1){
//         document.querySelector('.message').textContent = '📈Too High';
//     //    scoreminus();
//         score--;
//         document.querySelector('.score').textContent = score;
//        } else{
//            document.querySelector('.message').textContent = '💥You Lost the Game';
//            document.querySelector('.score').textContent = 0;
//        }
// } else if(guess < secretNumber){
//         if(score > 1){
//         document.querySelector('.message').textContent = '📉Too Low'
//     //    scoreminus();
//         score--;
//         document.querySelector('.score').textContent = score;
//    }    else{
//         document.querySelector('.message').textContent = '💥You Lost the Game'
//         document.querySelector('.score').textContent = 0;
// }}

// })


     //addEventListener is a special type of function that takes its second parameter as a function

//Making again button work

document.querySelector('.again').addEventListener('click',function() {
    score  = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = (Math.trunc((Math.random())*20)) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222'; //We use camel case notation if we using css property of two words
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?'; 
    document.querySelector('.guess').value = '';


})
