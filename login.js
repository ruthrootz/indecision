'use strict';

$(() => {

    $('#login').click(function() {
        let username = $('#username').val();
        let password = $('#password').val();
        login(username, password);
    });

    function login(username, password) {
        if (username === 'ruthisthegreatest' && password === 'password123') {
            window.location.href = 'loggedin.html';
        }
    }

});