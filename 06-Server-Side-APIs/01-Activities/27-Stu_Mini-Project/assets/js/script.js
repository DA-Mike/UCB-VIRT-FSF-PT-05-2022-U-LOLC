var searchFormEl = document.querySelector('#search-form');
var apiUrl = "https://www.loc.gov/";

// your code goes here

// Searches for items which have a specified original format. Possible values include:

//     maps: maps
//     audio recordings: audio
//     photo, print, drawing: photos
//     manuscripts/mixed material: manuscripts
//     newspapers: newspapers
//     film, videos: film-and-videos
//     printed music, such as sheet music: notated-music
//     archived websites: websites

// Example: https://www.loc.gov/maps/?q=civil war&fo=json

function formSubmitHandler(event) {
    //check to see if there's any search input
    event.preventDefault();

    var inputVal = searchFormEl.children[0].value;
    var formatVal = searchFormEl.children[1].value;

    getResults(inputVal, formatVal);
}

function getResults(inputVal, formatVal) {
    queryUrl = apiUrl + formatVal + "/?q=" + inputVal + "&fo=json";

    fetch(queryUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    displayResults(data);
                })
            } else {
                alert("Unable to make connection");
            }
        })
}

function displayResults(data) {
    //got to results.html
    
}

searchFormEl.addEventListener('submit', formSubmitHandler);
    
