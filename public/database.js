'use strict';

$(() => {

    (async function testingPosting() {
        const data = { 'some' : 'data' };
        const options = {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data),
        };
        const gotBackResponse = await fetch('/data', options);
        const parsedResponse = await gotBackResponse.json();
        console.log(parsedResponse);
    })();

});