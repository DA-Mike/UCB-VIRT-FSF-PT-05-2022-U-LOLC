// TODO: Select the existing DOM element, <div id="root">, and assign to a new variable
// Hint: Visit the documentation https://api.jquery.com/
var rootEL = $('#root');
// TODO: Create a `<p>` element that will store an author's name and assign that created element to a new variable
var authorEL = $('<p>');
// TODO: Add the following text to the newly created `<p>` element: "~ Carol Dweck"
authorEL.text('~Carol Dweck');
// TODO: Add the class `plain` to the author element
authorEL.addClass('plain');
// TODO: Create a new `<h1>` element that will store an author's quote and assign it to new variable
var quoteEl = $('<h1>');
// TODO: Add the following quote text to the quote element, "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
quoteEl.text('Love challenges, Be intrigued by mistakes, enjoy effort, and keep learning');
// TODO: Apply the class `fancy` to the quote element
quoteEl.attr('class','fancy'); //or addClass('fancy') because we created a new element with a new class
// TODO: Append the author element to the quote element
quoteEl.append(authorEL);
// TODO: Append the quote element to the HTML element with an ID of `root` in `index.html`
rootEL.append(quoteEl);