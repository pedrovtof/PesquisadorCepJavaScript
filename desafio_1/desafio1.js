let cep = document.querySelector('#cep');


    //focus
 cep.addEventListener('focus', (evento)=>{
         evento.target.classList.add('focus')
})
    //blur
cep.addEventListener('blur', (evento)=>{
     evento.target.classList.remove('focus')
 })
 
    
const Main = {

        //inicializador de eventtos e chamadas
    init:function(){
        this.cacheselector()
        this.bindEvents()
    },

        //selecionador de campos html
    cacheselector: function(){
        this.cep = document.querySelector('#cep');
        this.rua = document.querySelector('#rua');
        this.numero = document.querySelector('#numero');
        this.bairro = document.querySelector('#bairro');
        this.cidade = document.querySelector('#cidade');
        this.estado = document.querySelector('#estado');
        this.ibge = document.querySelector('#ibge');
    },

        //chamada de evento, nomenclatura
    bindEvents: function(){
        const selft = this
        this.cep.onchange  = selft.Events.pesquisarPorCep
    },

        //objeto com scrips dos eventos
    Events:{
        

        pesquisarPorCep: function(e){

    
            //se possuir 8 mostra
            if (cep.value.length === 8){
            
                animaçaoPonto()
            
            

            setTimeout(function(){ //connectando com API e fazendo callback

                let script = document.createElement('script')

                script.src = 'https://viacep.com.br/ws/'+ cep.value + '/json/?callback=meu_callback'

                document.body.appendChild(script);

            }, 1700)

             


            }

            //se nao possuir 8 avisa
            else {
                window.alert("Por gentileza preencher os 8 digitos do CEP")
                return
            }

            
            
            //animação dos pontos
            function animaçaoPonto(){
                let primeiraRodada ="."
                let segundaRodada =".."
                let terceiraRodada ="..."
                let fimRodada =""

                setTimeout(function(){
                rua.value = primeiraRodada
                bairro.value = primeiraRodada
                cidade.value = primeiraRodada
                estado.value = primeiraRodada
                ibge.value = primeiraRodada
                }, 300)

                setTimeout(function(){
                    rua.value = segundaRodada
                    bairro.value = segundaRodada
                    cidade.value = segundaRodada
                    estado.value = segundaRodada
                    ibge.value = segundaRodada
                    }, 700)

                setTimeout(function(){
                    rua.value = terceiraRodada
                    bairro.value = terceiraRodada
                    cidade.value = terceiraRodada
                    estado.value = terceiraRodada
                    ibge.value = terceiraRodada
                    }, 1200)

                    //limpa
                    setTimeout(function(){
                    rua.value = fimRodada
                    bairro.value = fimRodada
                    cidade.value = fimRodada
                    estado.value = fimRodada
                    ibge.value = fimRodada
                    }, 1500)
                }

            
        },
            
    },

                
}
    
//chamando init  no main
Main.init()


//call back
function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {

        //Atualiza os campos com os valores
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('estado').value=(conteudo.uf);
        document.getElementById('ibge').value=(conteudo.ibge);
    } else {
        
        //CEP não Encontrado
        alert("CEP não encontrado.");
    }
}