//food app API codes
var foodApiID = '3c019435';
var foodApiKey = '989fd6474c5656909bd6106a3b238820';

//get query selections from choice buttons
var qword = JSON.parse(localStorage.getItem('keywords'));
var harray = JSON.parse(localStorage.getItem('healthRestrictions'));
var darray = JSON.parse(localStorage.getItem('dietRestrictions'));

//creates arrays for the health and diet selections
var hword =[];
var dword=[];

//puts health choices into an array
for (i=0; i < harray.length; i++) {
    hword.push('&health=' + harray[i]); 
}

//puts diet choices into an array
for (i=0; i < darray.length; i++) {
    dword.push('&diet=' + darray[i]);
}


//formats values to use in AJAX query
var qwordString = qword.toString();
var hwordString = hword.join("");
var dwordString = dword.join("");

//Edamam Recipie API call based on health and diet selections
if (harray.length > 0 && darray.length > 0){

    $.ajax({
        url: 'https://api.edamam.com/search?q=' + qwordString + hwordString + dwordString + '&app_id=' + foodApiID + '&app_key=' + foodApiKey,
        method: "GET"
    }).then(function(response)
    {      
        displayResults(response.hits);
    });
}

//checks for health and dieth variable selections
else if(darray < 1 && harray > 0)
{
    $.ajax({
        url: 'https://api.edamam.com/search?q=' + qwordString + hwordString+ '&app_id=' + foodApiID + '&app_key=' + foodApiKey,
        method: "GET"
    }).then(function(response)
    {   
        console.log(url);
        displayResults(response.hits);
    });
}

else if (harray < 1 && darray > 0)
{
    $.ajax({
        url: 'https://api.edamam.com/search?q=' + qwordString + dwordString + '&app_id=' + foodApiID + '&app_key=' + foodApiKey,
        method: "GET"
    }).then(function(response)
    {      
        displayResults(response.hits);
    });
}
else
{
    $.ajax({
        url: 'https://api.edamam.com/search?q=' + qwordString + '&app_id=' + foodApiID + '&app_key=' + foodApiKey,
        method: "GET"
    }).then(function(response)
    {      
        displayResults(response.hits);
    });
}

//display the results on the results page with image, title, and link to recipie
function displayResults(results)
{

for (i=0; i < results.length; i++) 
{
  $("#resultImg" + i).attr("src",results[i].recipe.image);
  $("#resultTitle"+i).text("");
  $("#resultContent" + i).html("<strong>"+results[i].recipe.label+"</strong>");
  $("#resultLink" + i).attr("href",results[i].recipe.url);
  $("#resultLink" + i).attr("target","_blank");
  $("#resultLink" + i).text("Check it out!");
 } 
}

//calls joke API to get a joke based on ingrediants
var jokeSettings = 
    {
        "url": "https://icanhazdadjoke.com/search?term=" + qword[0],
        "method": "GET",
        "timeout": 0,
        "headers": {
        "Accept": "application/json"
        },
    };

$.ajax(jokeSettings).done(function (response) 
{
        //update joke area of results page
        if(response.total_jokes === 0)
            {joke.innerHTML = "<p>" + "No jokes found. Try another recipie!"+"</p>"}
        else 
        {joke.innerHTML = "<p>" + response.results[0].joke+"</p>"};
});
