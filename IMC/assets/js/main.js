function IMC(){
    const form = document.getElementById("FORME");
    form.onsubmit = function (evento) {
        evento.preventDefault();

        const peso = form.querySelector(".inputPeso");
        const altura = form.querySelector(".inputAltura");
        const result = form.querySelector(".result");
        let IMC = 0;

        if(isNaN(parseFloat(peso.value)) || (parseFloat(peso.value) > 600 || parseFloat(peso.value) < 0.257)){
            result.textContent = "Peso inválido!!";
            result.setAttribute('style', 'background-color: #FF6565 !important; opacity: 1 !important');
            console.log('erro peso');
        } else {
            if(isNaN(parseFloat(altura.value)) || (parseFloat(altura.value > 2.74 || parseFloat(altura.value) < 0.546))){
                result.textContent = "Altura inválida!!";
                result.setAttribute('style', 'background-color: #FF6565 !important; opacity: 1 !important');
                console.log('erro altura');
            } else {
                IMC = (parseFloat(peso.value.replace(',','.')) / parseFloat(altura.value.replace(',','.')) ** 2) 
                if( IMC <= 18.5){
                    result.textContent = `Seu IMC é de ${IMC.toFixed(2)} (Abaixo do peso)`;
                    result.setAttribute('style', 'background-color: #67FC04 !important; opacity: 1 !important');
                } if( IMC > 18.5 && IMC <= 24.9){
                    result.textContent = `Seu IMC é de ${IMC.toFixed(2)} (Peso normal)`;
                    result.setAttribute('style', 'background-color: #67FC04 !important; opacity: 1 !important');
                } if ( IMC > 24.9 && IMC <= 29.9){
                    result.textContent = `Seu IMC é de ${IMC.toFixed(2)} (Sobrepeso)`;
                    result.setAttribute('style', 'background-color: #67FC04 !important; opacity: 1 !important');
                } if (IMC > 29.9 && IMC <= 34.9){
                    result.textContent = `Seu IMC é de ${IMC.toFixed(2)} (Obesidade grau 1)`;
                    result.setAttribute('style', 'background-color: #67FC04 !important; opacity: 1 !important');
                } if (IMC > 34.9 && IMC <= 39.9){
                    result.textContent = `Seu IMC é de ${IMC.toFixed(2)} (Obesidade grau 2)`;
                    result.setAttribute('style', 'background-color: #67FC04 !important; opacity: 1 !important');
                } if (IMC > 39.9){
                    result.textContent = `Seu IMC é de ${IMC.toFixed(2)} (Obesidade grau 3)`;
                    result.setAttribute('style', 'background-color: #67FC04 !important; opacity: 1 !important');
                }
            }
        }
    }
}

IMC();


