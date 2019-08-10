$(() => {

    $('#submit').click(function() {
        let numberOfPeople = $('#people').val();
        let amountOfTime = $('#hours').val();
        let food = $('#food').is(':checked') ? 1 : 0;
        let coffee = $('#coffee').is(':checked') ? 1 : 0;
        let iceCream = $('#ice_cream').is(':checked') ? 1 : 0;
        let place = $('option').attr('selected', true).val();
        if (numberOfPeople > 0 && numberOfPeople <= 20 && amountOfTime > 0 && amountOfTime <= 3 && place != undefined) {
            // normalize the people and hours numbers
            // insert the validated data into trainingData.db via /data
            // FROM CODING TRAIN'S VIDEO:
            // button.addEventListener('click', async event => {
            //     const mood = document.getElementById('mood').value;
            //     video.loadPixels();
            //     const image64 = video.canvas.toDataURL();
            //     const data = { lat, lon, mood, image64 };
            //     const options = {
            //       method: 'POST',
            //       headers: {
            //         'Content-Type': 'application/json'
            //       },
            //       body: JSON.stringify(data)
            //     };
            //     const response = await fetch('/api', options);
            //     const json = await response.json();
            //     console.log(json);
            //   });
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