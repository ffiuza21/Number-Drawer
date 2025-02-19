function draw () {
    let quantity = parseInt(document.getElementById('quantity').value);
    let inicial = parseInt(document.getElementById('inicial').value);
    let limit = parseInt(document.getElementById('limit').value);

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
}

function getRamdomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}