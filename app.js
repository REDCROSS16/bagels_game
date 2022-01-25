class Bagels {
    constructor(guesses = 10, digits = 3) {
        this.secretNum = String(Math.floor(Math.random() * 1000));
        this.guesses = guesses;
        this.digits = digits;
    }
    name = 'Alex';

    sayNumber() {
        console.log(this.secretNum);
    }

    checkGuesses(){
        
    }

    getSecretNumWarn() {
        console.warn('Hey, ' + this.name + ' your secret key is ' + this.secretNum);
    }

    getClues(guess) {
        if (guess == this.secretNum) {
            alert( 'You Won!!!');
        }
        let guessArray = String(guess).split('');
        let secret = String(this.secretNum).split('');
        
        for (let item in guessArray) {
            // console.log(`index ${item} value ${guessArray[item]}`)
            // правильная цифра на правильном месте -  Fermi 
            if (secret[item] === guessArray[item]) {
                this.createResult('Fermi', 'fermi');
            } 

        } 


        // правильная цифра на неправильном месте -  Pico 
        for (let item in guessArray) {
            if (secret.includes(guessArray[item])) {
                this.createResult('Pico', 'pico');

            }
        }
        
        // нет правильных цифр - Bagels 
        this.createResult('Bagels', 'bagels');
    }

    createResult (text, className) {
        let result = document.createElement('span');
        let resultDiv = document.querySelector('.result');

        result.classList.add(className);
        result.innerText = text;
        resultDiv.append(result);
    }

    showWarningMessage() {
        alert('Вы ввели не число! нехорошо обманывать!')
    }
    /**
     * получить кнопку
     * @param {*} btn 
     */
    getBtn(btn) {
        btn.addEventListener('click' , (e) => {
            let div = document.querySelector('.result');
            div.innerHTML = '';
            let number = input.value;

            if (!Number.isInteger(+number) || number.length !== bagels.digits) { 
                this.showWarningMessage();
                return false;
            }

            this.getClues(number);
        })
    }

    setPlaceholder (input) {
        if (input) {
            input.setAttribute('placeholder', `ENTER ${this.digits} digits number!`);
        }
    }

}

const bagels = new Bagels;

let input = document.querySelector('#i-1');
let btn = document.querySelector('#btn-check');
bagels.setPlaceholder(input);
bagels.getBtn(btn);

bagels.getSecretNumWarn();