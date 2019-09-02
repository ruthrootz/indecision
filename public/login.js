'use strict';

$(() => {

    $('#login').click(function() {
        let localUsername = $('#username').val();
        let localPassword = $('#password').val();
        login(localUsername, localPassword);
    });

    async function login(localUsername, localPassword) {
        const loginInfo = await getLogin();
        if (localUsername === loginInfo.username && localPassword === loginInfo.password) {
            window.location.href = 'loggedin.html';
        }
        else {
            console.error('Login failed.');
        }
    }

    async function getLogin() {
        const response = await fetch('/login');
        const json = await response.json();
        return json;
    }

});