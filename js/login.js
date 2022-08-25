function _(el) {
    return document.getElementById(el);
}

// 1. on button click, get credentials from DOM
_('btn-submit').addEventListener('click', function() {
    // Author Credentials
    const authorEmail = 'admin@gmail.com';
    const authorPassword = 'secret96';

    // Get user credentials
    const userEmail = _('user-email');
    const userPassword = _('user-password');

    // 2. check the credentials
    if (userEmail.value === authorEmail && userPassword.value === authorPassword) {
    // Credentials true
        window.location.href = 'http://127.0.0.1:5500/banking.html';
    } else {
        alert('Youu email or password didn\'t match. Please provide correct email and password!');
    }
})

        