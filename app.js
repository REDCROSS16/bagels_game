class Bagels {
    constructor(guesses = 10, digits = 3) {
        this.secretNum = String(Math.floor(Math.random() * 1000));
        this.guesses = guesses;
        document.querySelector('#guesses').textContent = this.guesses;
        this.digits = digits;
    }
    name = 'Alex';

    btn = document.querySelector('#btn-check');
    restart = document.querySelector('#restart');


    restartGame() {
        this.restart.addEventListener('click', () => {
            location.reload();
        })
    }

    sayNumber() {
        console.log(this.secretNum);
    }

    updateGuesses(){
        this.guesses = this.guesses - 1;
        document.querySelector('#guesses').textContent = this.guesses;
        if (this.guesses === 0) {

            alert('GAMEOVER!');
            if (confirm('Вы хотите начать заново?')) {
                location.reload();
            } else {
                this.btn.classList.add('disabled');
            }
        }
    }

    getSecretNumWarn() {
        console.warn('Hey, ' + this.name + ' your secret key is ' + this.secretNum);
    }

    getClues(guess) {
        if (guess == this.secretNum) {
            alert( 'You Won!!!');
            this.btn.classList.add('disabled');
        }
        let guessArray = String(guess).split('');
        let secret = String(this.secretNum).split('');

        // правильная цифра на правильном месте -  Fermi
        for (let item in guessArray) {
            if (secret[item] === guessArray[item]) {
                this.createResult('Fermi', 'fermi'); 
                return;
            }
        }

        // правильная цифра на неправильном месте -  Pico 
        for (let item in guessArray) {
            if (secret.includes(guessArray[item])) {
                this.createResult('Pico', 'pico');
                return;
            }
        }

        // нет правильных цифр - Bagels 
        this.createResult('Bagels', 'bagels');
        return;
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
            bagels.updateGuesses();
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
bagels.restartGame();
bagels.setPlaceholder(input);
bagels.getBtn(btn);

bagels.getSecretNumWarn();