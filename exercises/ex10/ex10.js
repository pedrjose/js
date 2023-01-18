// Write a simple login page.

function loginUser() {
    loginUser = 'you@login.com'; loginPassword = '12345';
    loginInput = document.getElementById("user-login").value;
    passwordInput = document.getElementById("user-password").value;

    if (loginInput == loginUser && passwordInput == loginPassword) {
        document.getElementById("successful").innerHTML = 'Successful login!';
    }
    else {
        document.getElementById("failed").innerHTML = 'Failed login!';
    }
}