$(() => {

    $('#submit').click(function() {
        let numberOfPeople = $('#people').val();
        let amountOfTime = $('#hours').val();
        let food = $('#food').is(':checked') ? 1 : 0;
        let coffee = $('#coffee').is(':checked') ? 1 : 0;
        let iceCream = $('#ice_cream').is(':checked') ? 1 : 0;
        // ADD PLACE NAME DROP-DOWN
        if (numberOfPeople > 0 && numberOfPeople <= 20 && amountOfTime > 0 && amountOfTime <= 3) {
            trainingData.push({
                input : {
                numberOfPeople : normalizePeople(numberOfPeople),
                amountOfTime : normalizeHours(amountOfTime),
                food : food,
                coffee : coffee,
                iceCream : iceCream,
            }, output : { "Strickland's" : 1 } },);
            // confirm success
            clearForm();
        }
        else {
            $('#error').css('display', 'block');
        }
    });

});