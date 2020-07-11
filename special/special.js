//API variables
var foodApiID = '3c019435';
var foodApiKey = '989fd6474c5656909bd6106a3b238820';

//get query selections from choice buttons
var qword = ['breakfast','lunch','dinner','chicken','beef','pork','fish','tofu','american','caribbean','indian','asian','mexican','mediterranean'];
var harray = ['vegan', 'vegetarian', 'sugar-conscious', 'peanut-free', 'tree-nut-free', 'alcohol-free'];
var darray = ['balanced', 'high-protein', 'low-fat', 'low-carb'];

//gets a random word from each variable
var rqword = qword[Math.floor(Math.random()*qword.length)];
var rharray = harray[Math.floor(Math.random()*harray.length)];
var rdarray = darray[Math.floor(Math.random()*darray.length)];

//Edamam recipie API call based on health and diet selections
$.ajax({
        url: 'https://api.edamam.com/search?q=' + rqword + '&health=' + rharray + '&diet=' + rdarray + '&app_id=' + foodApiID + '&app_key=' + foodApiKey,
        method: "GET"
    }).then(function(response)
    {      
        console.log("response:"+response);
        displayResults(response.hits);
    });

//display the single result
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
        //updates joke area of results page
        if(response.total_jokes === 0)
            {joke.innerHTML = "<p>" + "No jokes found. Try another recipie!"+"</p>"}
        else 
        {joke.innerHTML = "<p>" + response.results[0].joke+"</p>"};
});