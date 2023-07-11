
const formulario = document.querySelector('#forms-login');
const createUser = document.querySelector('#cadastro');






formulario.addEventListener('submit', function loginUser(e){ //login
    e.preventDefault(); 

    const login = document.forms['forms-login'].mail.value;
    const password = document.forms['forms-login'].password.value;
    const mensagemErro = document.querySelector('#mensagemErro');

    
    
    if(!login || !password){
        let mensagemErroTexto = 'Ops, veifique se preencheu todos os campos'
        mensagemErro.innerHTML=mensagemErroTexto
    } 
    else if(login || password){
    
        fetch(`http://localhost:8080/api/login`, {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                "mail":login,
                password,
            })})
            .then(response =>{
                response.json().
                    then(data =>{
                       if(!data.login || !data.password){
                            let mensagemErroTexto = 'Ops, Login ou senha invalidos'
                            mensagemErro.innerHTML=mensagemErroTexto
                       }
                        else if (login === data.login.mail && password === data.password.password){
                            console.log('funfo')
                            let mensagemErroTexto = `Login e senha validos <br> Carregando`
                            mensagemErro.innerHTML=mensagemErroTexto
                            formulario.submit()
                        }else{
                            let mensagemErroTexto = `Erro na validação! Gentileza entrar em contato`
                            mensagemErro.innerHTML=mensagemErroTexto
                        }
                })
            })
            .catch(err=>console.log(err))
        
    }
    else{console.log('ERROR')}
    

})
 

createUser.onclick = function(e){ //mudar classe do form
    e.preventDefault();

    const introForm = document.querySelector('.intro')
    const user_created = document.forms['forms-login']
    const formHideIntro = document.querySelector('.intro-sem-cadastro')
    const formHide = document.querySelector('.from-cadastrar')
    
    formHide.style.display = 'block'
    formHideIntro.style.display = 'block'
    user_created.style.display = 'none'
    introForm.style.display = 'none'
} 

