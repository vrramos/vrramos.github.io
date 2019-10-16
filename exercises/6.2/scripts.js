window.onload = function() {
    function enviarFormulario() {
        let botaoFormulario

        botaoFormulario = document.querySelector('#button-submit')
        botaoFormulario.addEventListener('click', function(event){
       
            event.preventDefault()
            pegarResultados()
            inserirResultadosNaDiv()
        })
    }

    function inserirEstados() {
        let tagOption, tagSelect;
        let i = 0;
        let estados = [
            "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", 
            "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", 
            "RO", "RS", "RR", "SC", "SE", "SP", "TO"
        ]   
        
        tagSelect = document.querySelector('#estados');
        
        for(i = 0; i < estados.length; i++){        
            tagOption = document.createElement('option');
            tagSelect.appendChild(tagOption);
            tagOption.textContent = estados[i]
        }    
    }

    function criaUmaDivParaInserirOsResultados() {
        let divResultados, elementoPai
        divResultados = document.createElement('div')
        elementoPai = document.getElementsByTagName('body')[0].appendChild(divResultados)
        return divResultados
    }

    function pegarResultados() {
        let nome, email, cpf, endereco, cidade, selectEstado, estado, complemento
        let informacoes = []
        
        nome = document.querySelector('#nome').value
        email = document.querySelector('#email').value
        cpf = document.querySelector("#cpf").value
        endereco = document.querySelector('#endereco').value
        cidade = document.querySelector('#cidade').value
        selectEstado = document.querySelector('#estados').value
        estado = selectEstado.options[selectEstado.selectedIndex].text

        return informacoes = [nome,email,cpf,endereco,cidade,estado]
    }

    function inserirResultadosNaDiv() {
        let i, span

        for(i = 0; i < pegarResultados().length; i++){
            span = document.createElement('span')
            criaUmaDivParaInserirOsResultados().appendChild(span)
            span.textContent = pegarResultados()[i]
        }
    }



    inserirEstados()
    enviarFormulario()
    criaUmaDivParaInserirOsResultados()
}
