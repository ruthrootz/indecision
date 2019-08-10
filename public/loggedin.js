$(() => {

    $('#submit').click(function() {
        let numberOfPeople = $('#people').val();
        let amountOfTime = $('#hours').val();
        let food = $('#food').is(':checked') ? 1 : 0;
        let coffee = $('#coffee').is(':checked') ? 1 : 0;
        let iceCream = $('#ice_cream').is(':checked') ? 1 : 0;
        let place = $('option').attr('selected', true).val();
        if (numberOfPeople > 0 && numberOfPeople <= 20 && amountOfTime > 0 && amountOfTime <= 3 && place != undefined) {
            // this is where I need to insert the validated data into trainingData.db
            
            alert('Sucess!');
            clearForm();
        }
        else {
            $('#error').css('display', 'block');
        }
    });

    function clearForm() {
        $('#people').val('');
        $('#hours').val('');
        $('input[type="checkbox"').prop('checked', false);
    }

});