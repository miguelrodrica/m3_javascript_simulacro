const emailUser = document.getElementById('emailInputLogin');
const passwordUser = document.getElementById('passwordInputLogin');
const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', async () => {
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();

    for (const user of users) {
        if (emailUser.value === user.email && passwordUser.value === user.password) {
            emailUser.classList.add('is-valid')
            emailUser.classList.remove('is-invalid')
            passwordUser.classList.add('is-valid')
            passwordUser.classList.remove('is-invalid')

            if (user.role === "user") {
                window.location = "../user/menu.html";
            } else if (user.role === "admin") {
                window.location = "../admin/dashboard.html";
            }

            console.log('Bienvenido')
            break;
        } else if (emailUser.value === user.email && passwordUser.value !== user.password) {
            emailUser.classList.add('is-valid')
            emailUser.classList.remove('is-invalid')
            passwordUser.classList.add('is-invalid')
            passwordUser.classList.remove('is-valid')
        } else if (emailUser.value !== user.email) {
            emailUser.classList.add('is-invalid')
            emailUser.classList.remove('is-valid')
            passwordUser.classList.add('is-invalid')
            passwordUser.classList.remove('is-valid')
        }
    };
});