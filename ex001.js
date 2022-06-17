function conSultar() {
    const form = document.querySelector('.form');
    const resultado = document.getElementById('resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        let peso = form.querySelector('.peso');
        let altura = form.querySelector('.altura'); 
        let imc = peso.value / (altura.value * altura.value);

        pessoas.push({
            peso: peso.value,
            altura: altura.value
        });

        if(imc < 18.99) {
            resultado.innerHTML += `<p>Peso: ${peso.value}Kg <br>Altura: ${altura.value} Metros <br> IMC:
            ${imc.toFixed(2)} Abaixo do peso</p>`
        } else if (imc > 19.00 && imc <= 24.99 ) {
            resultado.innerHTML += `<p>Peso: ${peso.value}Kg <br>Altura: ${altura.value} Metros <br> IMC:
            ${imc.toFixed(2)} Peso ideal</p>`
        } else if (imc >= 25.00 && imc <= 29.99) {
            resultado.innerHTML += `<p>Peso: ${peso.value}Kg <br>Altura: ${altura.value} Metros <br> IMC:
            ${imc.toFixed(2)} Acima do peso</p>`
        } else if (imc > 30.00) {
            resultado.innerHTML += `<p>Peso: ${peso.value}Kg <br>Altura: ${altura.value} Metros <br> IMC:
            ${imc.toFixed(2)} Obesidade</p>`
        }

    };

    form.addEventListener('submit', recebeEventoForm);
}
conSultar();