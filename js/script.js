(function () {
    'use strict';
 
    var password = document.getElementById('signupPassword');
    var confirmPassword = document.getElementById('confirmPassword');
 
    function checkPasswordsMatch() {
        confirmPassword.setCustomValidity(
            confirmPassword.value === password.value ? '' : 'Passwords do not match.'
        );
    }
 
    if (password && confirmPassword) {
        password.addEventListener('input', checkPasswordsMatch);
        confirmPassword.addEventListener('input', checkPasswordsMatch);
    }
 
    Array.prototype.forEach.call(document.querySelectorAll('.needs-validation'), function (form) {
        form.addEventListener('submit', function (event) {

            event.preventDefault();
            event.stopPropagation();
 
            if (password && confirmPassword) {
                checkPasswordsMatch();
            }
 
            form.classList.add('was-validated');
        });
    });
})();