const form = document.querySelector('#formulario');
let resultadoDiv;

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (resultadoDiv) {
        form.removeChild(resultadoDiv);
    }

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura)) {
        alert('Preencha os campos com números.');
        return;
    }

    const imc = peso / Math.pow(altura / 100, 2);
    const resultado = classificaIMC(imc);

    resultadoDiv = document.createElement('div');
    resultadoDiv.textContent = `Seu IMC é: ${imc.toFixed(2)} - ${resultado}`;
    resultadoDiv.style.backgroundColor = getCorPorClassificacao(resultado);
    const formulario = document.querySelector('#formulario');
    formulario.insertBefore(resultadoDiv, formulario.querySelector('input[type="submit"]'));
});;

function classificaIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 24.9) {
        return "Peso normal";
    } else if (imc < 29.9) {
        return "Levemente acima do peso";
    } else if (imc < 34.9) {
        return "Obesidade grau 1";
    } else if (imc < 39.9) {
        return "Obesidade grau 2";
    } else {
        return "Obesidade grau 3";
    }
}

function getCorPorClassificacao(classificacao) {
    switch (classificacao) {
        case "Peso normal":
            return "green";
        case "Levemente acima do peso": 
            return "yellow";
        default:
            return "red"; 
    }
}