
function data(){

    function dayText(diaSemana){
        switch(diaSemana){
            case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto
            
            case 1:
            diaSemanaTexto = 'Segunda-Feira';
            return diaSemanaTexto
        
            case 2:
            diaSemanaTexto = 'Terça-Feira';
            return diaSemanaTexto
        
            case 3:
            diaSemanaTexto = 'Quarta-Feira';
            return diaSemanaTexto
        
            case 4:
            diaSemanaTexto = 'Quinta-Feira';    
            return diaSemanaTexto
        
            case 5:
            diaSemanaTexto = 'Sexta-Feira';
            return diaSemanaTexto
        
            case 6:
            diaSemanaTexto = 'Sabado';
            return diaSemanaTexto
        }
    }

    function mounthText(mesN){
        switch(mesN){
            case 1:
            mesTexto = 'Janeiro';
            return mesTexto
            
            case 2:
            mesTexto = 'Fevereiro';
            return mesTexto
        
            case 3:
            mesTexto = 'Março';
            return mesTexto
        
            case 4:
            mesTexto = 'Abril';
            return mesTexto
        
            case 5:
            mesTexto = 'Maio';    
            return mesTexto
        
            case 6:
            mesTexto = 'Junho';
            return mesTexto
        
            case 7:
            mesTexto = 'Julho';
            return mesTexto
    
            case 8:
            mesTexto = 'Agosto';
            return mesTexto
    
            case 9:
            mesTexto = 'Setembro';
            return mesTexto
    
            case 10:
            mesTexto = 'Outubro';
            return mesTexto
    
            case 11:
            mesTexto = 'Novembro';
            return mesTexto
    
            case 12:
            mesTexto = 'Desembro';
            return mesTexto
        }
    }
    
    function formataData(x) {
        return x <= 10 ? `0${x}` : x;
    }

    function atualizarData(){
    const data = new Date();
    diaN = data.getDay();
    dia = data.getDate();
    mes = data.getMonth() + 1;
    ano = data.getFullYear();
    hora = data.getHours();
    minutos = data.getMinutes();
    segundos = data.getSeconds();

    page = document.querySelector('.content')
    text = page.querySelector('.text')

    console.log(dayText(diaN))
    text.textContent = `${dayText(diaN)}, ${dia} de ${formataData(mounthText(mes))} de ${ano} as ${formataData(hora)}:${formataData(minutos)}:${formataData(segundos)}`
    }

    setInterval(atualizarData,1000)
}