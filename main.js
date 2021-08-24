function btnClick() {
    var name = document.getElementById('name').value
    var password = document.getElementById('password').value

    if(name === 'hayk.avagyan07@mail.ru' && password === '1234'){
    window.location.href = 'https://roadtothedream.com/'
    }else{
        alert('Please Go To The Register Page')
    }
}

function btn1Click(){
    window.location.href = 'RD/index.html'
}