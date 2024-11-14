var list = document.getElementById("empty-list")
document.querySelector("#empty-list")
{/* <ol id="empty-list"></ol> */}

function save() {
  // <input type="text" id="monday-input"/>
  var inputText = document.getElementById("monday-input").value

  if (inputText === "") {
    alert("You need to write something!")
  } else {
    var listItem = document.createElement("li")
    // <li></li>
    listItem.textContent = inputText
    // <li>lettuce</li>
    document.getElementById("monday-input").value = ""
    list.appendChild(listItem)
  }
}
