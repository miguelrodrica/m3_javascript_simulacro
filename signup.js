const form = document.querySelector('#signupForm');
const nameUser = document.querySelector('#nameInputSignUp');
const emailUser = document.querySelector('#emailInputSignUp');
const passwordUser = document.querySelector('#passwordInputSignUp');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const newUser = {
        name: nameUser.value,
        email: emailUser.value,
        password: passwordUser.value,
        role: "user"
    };

    await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    });

    alert('Usuario registrado correctamente');
    form.reset();
});