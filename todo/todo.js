// create a constant `list` so that you can use it to repeatedly refer to
// `document.getElementById("empty-list")` without having to write this every time
const list = document.getElementById("empty-list");
// This will find the following element from the html: <ol id="empty-list"></ol>

// By the way, this does exactly the same thing:
// const list = document.querySelector("#empty-list")

/**
 * Function to take an item from the input and add it to the list
 */
function save() {
  // find the `value` i.e. content property of the element with id `monday-input`
  const inputText = document.getElementById("monday-input").value;
  // it would find whatever is inside this element: `<input type="text" id="monday-input"/>`

  if (inputText === "") {
    alert("You need to write something!");
  } else {
    // creates the element: `<li></li>`
    const listItem = document.createElement("li");
    // takes the text now in the input, and puts it inside the 'list' element you just made
    // e.g. if the user writes 'lettuce' in the input, the list element is now like this:
    // `<li>lettuce</li>`
    listItem.textContent = inputText;
    // add the new list item we just made to the end of the list
    list.appendChild(listItem);
    // finally, clean up by getting the current value of the input element and set it to empty
    // again. you don't need to save or reuse the value this time, so we don't create a const from it.
    document.getElementById("monday-input").value = "";
  }
}
