window.onload = function() {
    function enviarFormulario() {
        let botaoFormulario

        botaoFormulario = document.querySelector('#button-submit')
        botaoFormulario.addEventListener('click', function(event){
            event.preventDefault()

            validarData()

        })
    }

    function validarData() {
        let dataInformada

        dataInformada = document.querySelector('#data-de-inicio').value
        console.log(dataInformada)
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
    inserirEstados()
    enviarFormulario()
}
