//empty arrays for the user inputs to go into
var healthRestrictions = [];
var dietRestrictions = [];

/*click event for all elements with the "healthIcon" class, if clicked it updates the class to 
 reflect that, changes the image to a purple version as needed, and updates the healthRestrictions arrays*/ 
$('.healthIcon').on('click', function() {
    if ($(this).hasClass('notClicked')) {

        healthRestrictions.push($(this).attr('value'));

        $('#' + $(this).attr('value') + 'Icon').attr('src', '../assets/purp icons/' + $(this).attr('value') + '.png');
        $(this).addClass('clicked');
        $(this).removeClass('notClicked');
    }
    else if ($(this).hasClass('clicked')) {

        var index1 = healthRestrictions.indexOf($(this).attr('value'));
        if (index1 > -1) {
            healthRestrictions.splice(index1, 1);
        }

        $('#' + $(this).attr('value') + 'Icon').attr('src', '../assets/white icons/' + $(this).attr('value') + '.png');
        $(this).addClass('notClicked');
        $(this).removeClass('clicked');
    }
});

/*click event for all elements with the "dietIcon" class, if clicked it updates the class to 
 reflect that, changes the image to a purple version as needed, and updates the dietRestrictions arrays*/ 
$('.dietIcon').on('click', function() {
    if ($(this).hasClass('notClicked')) {

        dietRestrictions.push($(this).attr('value'));

        $('#' + $(this).attr('value') + 'Icon').attr('src', '../assets/purp icons/' + $(this).attr('value') + '.png');
        $(this).addClass('clicked');
        $(this).removeClass('notClicked');
    }
    else if ($(this).hasClass('clicked')) {

        var index2 = dietRestrictions.indexOf($(this).attr('value'));
        if (index2 > -1) {
            dietRestrictions.splice(index2, 1);
        }

        $('#' + $(this).attr('value') + 'Icon').attr('src', '../assets/white icons/' + $(this).attr('value') + '.png');
        $(this).addClass('notClicked');
        $(this).removeClass('clicked');
    }
});

//click event for the element with the "noAllergies" id, it ensures the arrays are empty and stores them in localStorage
$('#noAllergies').on('click', function() {
    healthRestrictions = []
    dietRestrictions = [];

    localStorage.setItem('healthRestrictions', JSON.stringify(healthRestrictions));
    localStorage.setItem('dietRestrictions', JSON.stringify(dietRestrictions));
});

//click event for the element with the "applyAllergies" id, it stores the arrays in localStorage
$('#applyAllergies').on('click', function() {
    localStorage.setItem('healthRestrictions', JSON.stringify(healthRestrictions));
    localStorage.setItem('dietRestrictions', JSON.stringify(dietRestrictions));
});
