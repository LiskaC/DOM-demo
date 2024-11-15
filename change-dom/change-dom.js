// select a single element (by 'id' -> use # symbol before id name)
// this would find, for example an element like this: '<div id="paragraphs">....</div>'
const paragraphsBox = document.querySelector('#paragraphs')

/**
 * Function to add a paragraph to the list of paragraphs
 */
function addParagraph() {
  // create new html 'paragraph' -> '<p></p>' element 
  const newParagraph = document.createElement('p');
  // give the new empty <p></p> element some text content -> <p>I'm another paragraph</p>
  // remember, this '=' is an assignment operator (it sets a new value for the thing on the left)
  newParagraph.textContent = 'I\'m another paragraph';
  // add it as the last child to the div with id 'paragraphs'
  paragraphsBox.appendChild(newParagraph)
  // !if you want to insert at a specific position, you have to use `.insertBefore(newParagraph, paragraphsBox.children[0])`
  // change the `[0]` value to whatever position in the parent element you want the child to appear at. Try playing around with this.
  // https://www.w3schools.com/jsref/met_node_insertbefore.asp
}

/**
 * Removes the last paragraph
 */
function removeParagraph() {
  paragraphsBox.removeChild(paragraphsBox.lastChild)
}

// select all elements with a given class name (use '.' symbol before class name)
const boxes = document.querySelectorAll('.box')

/**
 * Function to change the color of the box element
 */
function changeColor() {
  // Step 1 - a function to just set the color of the boxes to red.
  // boxes.forEach(box => box.style.backgroundColor = 'red')

  // Step 2 - a function using a conditional statement to check the color of the boxes, and set another color accordingly
  // take the boxes. for each box, check the style background color
  boxes.forEach(box => {
    // remember, '===' is an equality operator. The condition below is asking 'is the box's style color aquamarine?'
    if (box.style.backgroundColor === 'aquamarine') {
      // if it is, then we use '=', the assignment operator, to set it to 'orange'
      box.style.backgroundColor = 'orange';
    } else if (box.style.backgroundColor === 'orange') {
      box.style.backgroundColor = 'red';
    } else {
      box.style.backgroundColor = 'aquamarine';
    }
  })
}
