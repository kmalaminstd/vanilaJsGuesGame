
const guesNumber = document.querySelector('input[type="number"]');
const subBtn = document.querySelector('input[type="submit"]');
const computerNumber = document.querySelector('.computerNum');

let gameText = document.querySelector('.gameText');
const gameResH3 = document.querySelector('.gameResult h3');
const wonRes = document.querySelector('.winTime');
const lostRes = document.querySelector('.lostTime');
const refresBtn = document.querySelector('.refBtn');
let leftChanceElm = document.querySelector('.leftChance'); 

let chances = 0;
let totalChances = 5;
let leftChance = 0;
let win = 0;
let lost = 0;

    

subBtn.addEventListener('click', function(e){
    e.preventDefault();

    let guesNum = parseInt(guesNumber.value);

    if(guesNum > 5 || guesNum < 1){

        alert('Please select a number between');

    }else{

        chances++;
        // console.log(chances);

        if(chances === 5){
            alert('Gameover');

            subBtn.setAttribute('disabled','disabled');
            subBtn.style.backgroundColor = 'lightblue';
            subBtn.style.cursor = 'no-drop';
        }

        leftChance = totalChances - chances;
        // console.log(leftChance);

        leftChanceElm.textContent = leftChance;

        let randNumber = Math.floor(Math.random()*5) + 1;
        // console.log(randNumber);
    
        if(randNumber === guesNum){
            win++;
            // alert('Won')
            gameText.innerHTML = `<span class="wonText">You won.</span>`;
            wonRes.textContent = win;
        }else{
            // alert('Lost')
            lost++;
            gameText.innerHTML = `<span class="lostText">You lost. The number was ${randNumber}</span> `;
            lostRes.textContent = lost;
        }

    }

    

    
    // getNumber();
    guesNumber.value = '';
});

refresBtn.addEventListener('click', function(){
    location.reload();
})