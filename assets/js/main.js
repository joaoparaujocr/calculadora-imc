//Capturar evento de submit do formulário
const form = document.querySelector('#form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso && !altura) {
        setResultado('Peso e altura inválidos', false, 'vermelho')
        return;
    }

    if (!peso) {
        setResultado('Peso invalido', false, 'vermelho');
        return;
    }

    if (!altura) {
        setResultado('Altura invalida', false, 'vermelho');
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    const cor = corDoParagrafo(imc)

    setResultado(msg, true, cor);
})

//Cor Do paragrafo
function corDoParagrafo (indice) {
    if (indice >= 39.9) {
        return 'vermelho';
    }else if (indice >= 29.9) {
        return 'amarelo';
    }else if (indice < 18.5) {
        return 'verde';
    }
}


//Nivel do IMC
function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) {
        return nivel[5]
    } else if (imc >= 34.9) {
        return nivel[4]
    } else if (imc >= 29.9) {
        return nivel[3]
    } else if (imc >= 24.9) {
        return nivel[2]
    } else if (imc >= 18.5) {
        return nivel[1]
    } else if (imc < 18.5) {
        return nivel[0]
    }
}

//Calculando IMC
function getImc (peso, altura) {
    return (peso / (altura ** 2)).toFixed(2);
}

//Criar paragrafo
function criarParagrafo () {
    return document.createElement('p');
}

//Resultado
function setResultado (msg, isValid, colorN) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const paragrafoResultado = criarParagrafo();

    if (isValid) {
        paragrafoResultado.classList.add('imc',colorN);
    } else {
        paragrafoResultado.classList.add('imc',colorN);
    }


    paragrafoResultado.innerHTML = msg;
    resultado.appendChild(paragrafoResultado)
}