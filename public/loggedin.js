$(() => {

    let submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', () => {
        let numberOfPeople = $('#people').val();
        let amountOfTime = $('#hours').val();
        let food = $('#food').is(':checked') ? 1 : 0;
        let coffee = $('#coffee').is(':checked') ? 1 : 0;
        let iceCream = $('#ice_cream').is(':checked') ? 1 : 0;
        let place = $('option:selected').val();
        console.log(place);
        if (numberOfPeople > 0 && numberOfPeople <= 20 && amountOfTime > 0 && amountOfTime <= 3 && place != undefined) {
            let data = {
                'input' : {
                    'numberOfPeople' : Number(numberOfPeople),
                    'amountOfTime' : Number(amountOfTime),
                    'food' : food,
                    'coffee' : coffee,
                    'iceCream' : iceCream 
                },
                'output' : { }
            };
            data.output[place] = 1;
            let options = {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
            postData(options).then(clearForm());
        }
        else {
            $('#error').css('display', 'block');
        }
    });

    async function postData(options) {
        const response = await fetch('/data', options);
        const json = await response.json();
        console.log(json);
    }

    function clearForm() {
        $('#people').val('');
        $('#hours').val('');
        $('input[type="checkbox"').prop('checked', false);
        $('#error').css('display', 'none');
    }

});