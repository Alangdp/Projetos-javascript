const contador = document.querySelector('.contador');
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar')
const zerar = document.querySelector('#zerar')


let segundo = 0
let minuto = 0
let hora = 0
zeroEsquerda = (x) => x < 10 ? `0${x}` : x

iniciar.addEventListener('click', function (evento){
    iniContagem()
})
pausar.addEventListener('click', function(evento){
    pausa()
});

zerar.addEventListener('click',function(evento){
    zera()
})


function iniContagem () {
    contador.style.color = 'black'
    timer = setInterval(function(){
        segundo ++;
        if (segundo === 60){
            segundo = 0;
            minuto ++
        }

        if ( minuto === 60){
            minuto = 0;
            hora++ ;
        }
        contagem = `${zeroEsquerda(hora)}:${zeroEsquerda(minuto)}:${zeroEsquerda(segundo)}`
        document.title = contagem
        contador.innerHTML = contagem
    },1000)
}
function pausa () {
    setTimeout(function(){
        contador.style.color = 'RED'
        clearInterval(timer)
    })
}

function zera () {
    setTimeout(function(){
        clearInterval(timer)
        contador.style.color = 'black'
        hora = 0 
        minuto = 0
        segundo = 0
        contagem = `${zeroEsquerda(hora)}:${zeroEsquerda(minuto)}:${zeroEsquerda(segundo)}`
        contador.innerHTML = contagem
        contador.style.color = 'black'
        document.title = contagem
    })
}
