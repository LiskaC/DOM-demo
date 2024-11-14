function addParagraph() {
  const paragraphsBox = document.querySelector('#paragraphs')
  const newParagraph = document.createElement('p')
  newParagraph.textContent = 'Another paragraph'
  paragraphsBox.appendChild(newParagraph)
}

function changeColor() {
  const boxes = document.querySelectorAll('.box')
  // boxes.forEach(box => box.style.backgroundColor = 'red')

  boxes.forEach(el => {
    if (el.style.backgroundColor === 'red') {
      el.style.backgroundColor = 'aquamarine';
    } else if (el.style.backgroundColor === 'aquamarine') {
      el.style.backgroundColor = 'orange';
    } else {
      el.style.backgroundColor = 'red';
    }
  })
}

