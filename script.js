document.getElementById('formjs').addEventListener("submit", (e)=>{
    e.preventDefault();
    let email = document.getElementById('inputEmail');
    let password = document.getElementById('inputPassword');
    if (email.value =='admin@gmail.com' && password.value == '12345678') {
        window.location.href = "page2.html";
    } else {
        alert('incorrect')
    }
})