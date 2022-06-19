
const guesNumber = document.querySelector('input[type="number"]');
const subBtn = document.querySelector('input[type="submit"]');
const computerNumber = document.querySelector('.computerNum');
const scoreBox = document.querySelector('.scoreBox');
const fResultElm = document.querySelector('.scoreBox h4');
const closeBtnElm = document.querySelector('.closeBtn');

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

    // if(guesNumber.value === ''){
    //     alert('Pass value');
    //     chances = 0;
    // }

    let guesNum = parseInt(guesNumber.value);
    // let guesNum = guesNumber.value;

    // console.log(guesNum.value === '')

    // console.log(guesNum);

    // if(guesNum == NaN){
    //     alert('Pass value')
    // }


    if(guesNum > 5 || guesNum < 1 || guesNumber.value === ''){

        alert('Please select a number between 1 to 5');

    }else{

        chances++;
        // console.log(chances);

        if(chances === 5){
            alert('Gameover');

            subBtn.setAttribute('disabled','disabled');
            subBtn.style.backgroundColor = 'lightblue';
            subBtn.style.cursor = 'no-drop';

            // subBtn.style.display = "block";

            refresBtn.style.display = "block";
            scoreBox.style.display = "block";
        }else{
            scoreBox.style.display = "none";
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

        if(win > lost){
            fResultElm.textContent = "You won the round"
        }else{
            fResultElm.textContent = "You lost the round"
        }

    }

    // getNumber();
    guesNumber.value = '';
});

refresBtn.addEventListener('click', function(){
    location.reload();
})

closeBtnElm.addEventListener('click', function(){
    scoreBox.style.display = 'none';
})

