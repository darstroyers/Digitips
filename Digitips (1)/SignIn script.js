function validate(){
    const username = document.forms['sign-in']['username'].value;
    const password = document.forms['sign-in']['password'].value;

    if (!username || !password) {
        alert('Please fill in the username and password')
        return false;
    }

    alert('Logged in');
}

function validate2(){
    const username = document.forms['sign-up']['username'].value;
    const email = document.forms['sign-up']['email'].value;
    const password = document.forms['sign-up']['password'].value;

    if (!username || !password || !email) {
        alert('Please fill in the form')
        return false;
    }

    alert('Logged in');
}