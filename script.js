let resultado = document.getElementById('resultado');
let botao = document.getElementById('botao');
let recarregar = document.getElementById('recarregar');

const calcular = () => {
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;

    if (altura != "" && peso != "") {
        console.log(altura)
        console.log(peso)
        resultado.innerHTML = `Seu IMC é: <strong>${(peso / altura ** 2).toFixed(2)}</strong> <br /> Você está ${situacao((peso / altura ** 2).toFixed(2))}`;
        botao.style.display = 'none';
        recarregar.style.display = 'block';
    } else
        return false;
}

const reload = () => {
    botao.style.display = 'block';
    document.getElementById('altura').value = "";
    document.getElementById('peso').value = "";
    resultado.innerHTML = ``;
    recarregar.style.display = 'none';
}

const situacao = (imc) => {
    if (imc < 17)
        return 'muito abaixo do peso.'
    else if (imc >= 17 && imc <= 18.49)
        return 'abaixo do peso..'
    else if (imc >= 18.50 && imc <= 24.99)
        return "com peso normal."
    else if (imc >= 25 && imc <= 29.99)
        return "acima do peso."
    else if (imc > 30 && imc <= 34.99)
        return 'com obesidade nível I.'
    else if (imc >= 35 && imc <= 39.99)
        return 'com obesidade nível II (severa).'
    else
        return 'com obesidade nível III (mórbida).'
}