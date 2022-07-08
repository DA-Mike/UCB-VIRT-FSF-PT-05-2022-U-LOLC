var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var itemNameEl = $('input[name="shopping-input"]');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

function submitEvent(event) {
    event.preventDefault();
    var itemName = $('<li>');
    console.log("itemName: ", itemNameEl.val());

    if (!itemNameEl.val()) {
        
    } else {
        itemName.text(itemNameEl.val());
        shoppingListEl.append(itemName);
    }

    $('input[name="shopping-input"]').val('');
    return;
}


// TODO: Add an event listener to the `shoppingFormEl` to handle submission

shoppingFormEl.on("submit", submitEvent);
