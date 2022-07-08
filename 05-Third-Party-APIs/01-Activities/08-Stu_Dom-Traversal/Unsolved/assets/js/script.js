// Assemble: Create/select DOM elements
var rootEl = $('#root');

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.
rootEl.children('ul').children().css('background-color', 'white');


// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning

// rootEl.children().eq(3).children().eq(0).append("O");

// rootEl.children().eq(1).children().eq(0).append("O");
$('.item-a1').text('O');
$('.item-a3').text('O');

//either way works!