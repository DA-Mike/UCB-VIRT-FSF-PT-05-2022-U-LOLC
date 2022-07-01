function keydownAction(event) {
  // TODO: Complete keydown function
  event.preventDefault();
  console.log(event);
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
  document.querySelector("#key").innerHTML = event.key;
  document.querySelector("#code").innerHTML = event.code;

}

function keyupAction(event) {
  event.preventDefault();
  console.log(event);
  document.querySelector("#status").innerHTML = "KEYUP Event";
  document.querySelector("#key").innerHTML = "";
  document.querySelector("#code").innerHTML = "";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
