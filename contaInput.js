const contaInput = document.getElementById('contaInput'); 
const contaInputExp = '';

contaInput.addEventListener('keydown', function(event){
    event.preventDefault();

    
    if (event.key === 'Enter') {
        contaInputExp = eval(contaInput);
        alert(contaInputExp);
    }

    


})



