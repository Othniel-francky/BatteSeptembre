function signup(e) {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let pass = document.getElementById('password').value;

    let user = {
        email: email,
        username: username,
        password: pass,
    };

    let json = JSON.stringify(user);
    localStorage.setItem(username, json)
    console.log('user add');
}

function loginFunc(e) {
    event.preventDefault()

    let username = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    let result = document.getElementById('result')
    let user = localStorage.getItem(username);
    let data = JSON.parse(user);
    console.log(data);

    if (user = null) {
        result.innerHTML = "demande nom";
    }else if(username == data.username && pass == data.password){
        result.innerHTML= "logging"
    }else{
        result.innerHTML= "mot de passe"
    }
}