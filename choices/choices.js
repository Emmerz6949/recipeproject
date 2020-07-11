//empty array for the user inputs to go into
var keywords = [];

/*click event for all elements with the "icon" class, if clicked it updates the class to 
 reflect that, changes the image to a purple version as needed, and updates the keywords arrays*/ 
$('.icon').on('click', function() {
    if ($(this).hasClass('notClicked')) {

        keywords.push($(this).attr('value'));

        $('#' + $(this).attr('value') + 'Icon').attr('src', '../assets/purp icons/' + $(this).attr('value') + '.png');
        $(this).addClass('clicked');
        $(this).removeClass('notClicked');
    }
    else if ($(this).hasClass('clicked')) {

        var index1 = keywords.indexOf($(this).attr('value'));
        if (index1 > -1) {
            keywords.splice(index1, 1);
        }

        $('#' + $(this).attr('value') + 'Icon').attr('src', '../assets/white icons/' + $(this).attr('value') + '.png');
        $(this).addClass('notClicked');
        $(this).removeClass('clicked');
    }
});

/*click event for the element with the "applyChoices" id, it stores the array in 
 localStorage and continues to the results.html if there is at least 1 input in the 
 keywords array, if there is no input in the keywords array it will populate the 
 div with the "error" id with a message that requests the user select at least one*/
$('#applyChoices').on('click', function() {
    if (keywords.length > 0) {
        localStorage.setItem('keywords', JSON.stringify(keywords));
        window.location.assign('../results/results.html');
    }
    else if (keywords.length < 1) {
        $('#error').html('<p>Please select at least one.</p>')
    }
});
