var badRequestUrl = 'https://api.github.com/unicorns';
var redirectUrl = './404.html';

fetch(badRequestUrl).then(function (response) {
  console.log(response);
  if (response.status === 404) {
    // document.location.href = redirectUrl;
    //both ways work
    window.location.replace(redirectUrl);
  }
  // Use a conditional to check the response status.
  // If that status equals the conditional, then redirect to the 404 page.
});
