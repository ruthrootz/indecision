'use strict';

$(() => {
    
    const net = new brain.NeuralNetwork({ hiddenLayers : [3, 3] });console.log(net.train(trainingData));
    
    function pickPlace(numberOfPeople, amountOfTime, food, coffee, iceCream) {
        numberOfPeople = normalizePeople(numberOfPeople);
        amountOfTime = normalizeHours(amountOfTime);
        food = food ? 1 : 0;
        coffee = coffee ? 1 : 0;
        iceCream = iceCream ? 1 : 0;
        let results = net.run({
            numberOfPeople,
            amountOfTime,
            food,
            coffee, 
            iceCream,
        });
        console.log({
            numberOfPeople,
            amountOfTime,
            food,
            coffee, 
            iceCream,
        });
        console.log(results);
        return resultsToPlaceName(results);
    }
    
    function resultsToPlaceName(results) {
        let max = 0;
        let placeName = '';
        for (let place in results) {
            if (results[place] > max) {
                max = results[place];
                placeName = place;
            }
        }
        return placeName;
    }
    
    function clearForm() {
        $('#people').val('');
        $('#hours').val('');
        $('input[type="checkbox"').prop('checked', false);
    }
    
    function main() {
        $('#error').css('display', 'none');
        $('#result').html('');
        let numberOfPeople = $('#people').val();
        let amountOfTime = $('#hours').val();
        let food = $('#food').is(':checked') ? true : false;
        let coffee = $('#coffee').is(':checked') ? true : false;
        let iceCream = $('#ice_cream').is(':checked') ? true : false;
        if (numberOfPeople > 0 && numberOfPeople <= 20 && amountOfTime > 0 && amountOfTime <= 3) {
            let result = pickPlace(numberOfPeople, amountOfTime, food, coffee, iceCream);
            $('#result').html(result);
            clearForm();
        }
        else {
            $('#error').css('display', 'block');
        }
    }

    $('#pick').click(main);

    $('#login').click(function() {
        window.location.href = 'login.html';
    });

});