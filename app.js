function draw() {
    let quantity = parseInt(document.getElementById('quantity').value);
    let inicial = parseInt(document.getElementById('inicial').value);
    let limit = parseInt(document.getElementById('limit').value);

    if (inicial >= limit) {
        alert(`Error: The inicial number can't be greater or equal than the limit number! Please insert a inicial number lower than the limit number`);
            return;
    }

    if (quantity > (limit - inicial + 1)) {
        alert(`Error: The quantity value can't be greater than the possible numbers`);
        return;
    }


    let drawn = [];
    let number;

    for (let i = 1; i <= quantity; i++) {
        number = getRamdomNumber(inicial, limit);

        while (drawn.includes(number)) {
            number = getRamdomNumber(inicial, limit);

        }
        
        drawn.push(number);
    }

    let result = document.getElementById('result');
    result.innerHTML = `<label class="texto__paragrafo">Drawn Numbers: ${drawn}</label>`;

    enableRestart();
}

function getRamdomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function enableRestart() {
    let restartButton = document.getElementById("btn-restart");
    if (restartButton.classList.contains('container__disabled-button')) {
        restartButton.classList.remove('container__disabled-button');
        restartButton.classList.add('container__botao');
    } else {
        restartButton.classList.remove('container__botao');
        restartButton.classList.add('container__disabled-button');
    }
}

function restart() {
    document.getElementById('quantity').value = '';
    document.getElementById('inicial').value ='';
    document.getElementById('limit').value ='';
    document.getElementById('result').innerHTML = 'Drawn Numbers: none';
    enableRestart();
}
