    document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.containerDetails');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const registerButton = document.getElementById('registerButton');
    let usernameTouched = false;
    let passwordTouched = false;
    let confirmPasswordTouched = false;

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validatePassword(password) {
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
        return regex.test(password);
    }

    function showError(input, errorSpan, message) {
        errorSpan.textContent = message;
        input.classList.add('error');

        setTimeout(() => {
            errorSpan.textContent = '';
            input.classList.remove('error');
        }, 2500);
    }

    function clearError(input, errorSpan) {
        errorSpan.textContent = '';
        input.classList.remove('error');
    }

    function validateForm(event) {
        event.preventDefault();

        clearError(usernameInput, usernameError);
        clearError(passwordInput, passwordError);
        clearError(confirmPasswordInput, confirmPasswordError);

        const usernameValue = usernameInput.value.trim();
        const passwordValue = passwordInput.value.trim();
        const confirmPasswordValue = confirmPasswordInput.value.trim();

        if (usernameValue === '' && passwordValue === '' && confirmPasswordValue === '') {
            showError(usernameInput, usernameError, '*Field cannot be empty');
            showError(passwordInput, passwordError, '*Field cannot be empty');
            return;
        }
        if (!validateEmail(usernameValue) && usernameTouched) {
            showError(usernameInput, usernameError, '*Enter a valid username');
        }
        if (!validatePassword(passwordValue) && passwordTouched) {
            showError(passwordInput, passwordError, '*Password too weak!');
        }
        if (passwordValue !== confirmPasswordValue && confirmPasswordTouched) {
            showError(confirmPasswordInput, confirmPasswordError, '*Passwords do not match');
        }
    }

    usernameInput.addEventListener('focus', function() {
        usernameTouched = true;
    });
    passwordInput.addEventListener('focus', function() {
        passwordTouched = true;
    });
    confirmPasswordInput.addEventListener('focus', function() {
        confirmPasswordTouched = true;
    });
    usernameInput.addEventListener('blur', function() {
        usernameTouched = true;
    });
    passwordInput.addEventListener('blur', function() {
        passwordTouched = true;
    });
    confirmPasswordInput.addEventListener('blur', function() {
        confirmPasswordTouched = true;
    });
    registerButton.addEventListener('click', validateForm);
});



// Form Control

const registerForm = document.getElementById('registerForm');
        const loginForm = document.getElementById('loginForm');

        const loginLink = document.getElementById('loginLink');
        const registerLink = document.getElementById('registerLink');

        const loginButton = document.getElementById('loginButton');
        loginLink.addEventListener('click', ()=>{
            registerForm.style.display = 'none';
            loginForm.style.display = 'block';
        });
        registerLink.addEventListener('click', ()=>{
            registerForm.style.display = 'block';
            loginForm.style.display = 'none';
        });

        // loginForm control 

        document.getElementById('loginForm').addEventListener('submit', function(event) {
            var username = document.getElementById('username2').value.trim();
            var password = document.getElementById('password2').value.trim();
            var usernameError2 = document.getElementById('usernameError2');
            var passwordError2 = document.getElementById('passwordError2');

            // Reset previous error messages
            usernameError2.textContent = '';
            passwordError2.textContent = '';

            // Check if username and password are empty
            if (username === '') {
                usernameError2.textContent = 'Enter valid username.';
                event.preventDefault();
                setTimeout(() => {
                    usernameError2.textContent = '';
                }, 2500);
            }
            if (password === '') {
                passwordError2.textContent = 'Enter valid password.';
                event.preventDefault();
                setTimeout(()=>{
                    passwordError2.textContent = '';
                }, 2500);
            }
        });

        // Show error message when input fields are touched
        document.getElementById('username2').addEventListener('input', function() {
            document.getElementById('usernameError2').textContent = '';
            // setTimeout(() => {
            //     usernameError2.textContent = '';
            // }, 2500);
        });

        document.getElementById('password2').addEventListener('input', function() {
            document.getElementById('passwordError2').textContent = '';
            // setTimeout(() => {
            //     errorSpan.textContent = '';
            //     input.classList.remove('error');
            // }, 2500);
        });

        // OAuth2


        const googleSubmit = document.getElementById('googleSubmit');
    
        googleSubmit.addEventListener('click', (e)=>{


            e.preventDefault();
            passwordError2.textContent = '';


            let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth"
            let form = document.createElement('form')
            form.setAttribute('method', 'GET')
            form.setAttribute('action', oauth2Endpoint)

            let params = {
                "client_id":"442004271983-tcnpmqnc1ec5o9elquqn845a9d83elnv.apps.googleusercontent.com",
                "redirect_uri":"http://127.0.0.1:5500/dashboard.html",
                "response_type":"token",
                "scope":"https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/youtube.readonly",
                "includeGrantedScope":'true',
                'state':'pass-through-value'
            }
            for(var p in params){
                let input = document.createElement('input')
                input.setAttribute('type','hidden')
                input.setAttribute('name',p)
                input.setAttribute('value',params[p])
                form.appendChild(input)
            }

            document.body.appendChild(form)
            form.submit();
        });


        // document.addEventListener("DOMContentLoaded", function() {
        //     const rememberMeCheckbox = document.querySelector('.checkbox');
            
        //     if (localStorage.getItem('rememberMe') === 'true') {
        //         rememberMeCheckbox.checked = true;
        //     }
        
        //     rememberMeCheckbox.addEventListener('change', function() {
        //         localStorage.setItem('rememberMe', this.checked);
        //     });
        
        //     const forgotPasswordLink = document.querySelector('.promptText span');
            
        //     forgotPasswordLink.addEventListener('click', function() {
        //         window.location.href = 'password-reset.html';
        //     });
        // });
        