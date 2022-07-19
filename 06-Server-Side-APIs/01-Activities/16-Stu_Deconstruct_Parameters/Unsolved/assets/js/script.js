fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
  
//Parameter explanation.
//page: The number of results per page (max 100)
//state: statestring Either open, closed, or all to filter by state.
//sort: The property to sort the results by.
//direction: The order to sort by. Default: asc when using full_name, otherwise desc.
