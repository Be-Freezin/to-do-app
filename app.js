let submit = document.getElementById("btn-el");

let inputEl = document.getElementById("inputEl");

const completeBtn = document.getElementById("delete-btn");

const listContain = document.querySelector(".list-container");

let list = document.getElementById("list");

let dltButton = document.createElement("button");
let newLi = document.createElement("li");

// Function to add the li items to our list
function addLists() {
  let list = document.getElementById("list");
  let newLi = document.createElement("li");

  if (inputEl.value === ``) {
    alert("please enter a task!");
  } else {
    newLi.innerHTML = inputEl.value;
    // assigning the html of the input element to our new li item
    inputEl.value = "";
    // Clearing the input box field

    list.appendChild(newLi);

    // Triggering our new button function to create a button when the addLists function is called
    createBtn(newLi);
  }

  // Here we are applying logic to our input field. We are telling javascript "Hey, if the field is empty, tell them. If its not empty, then complete the original task"
}

// Submit button function (check mark button)
submit.addEventListener("click", function () {
  addLists();
});
// Submit on pressing "ENTER" key
inputEl.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addLists();
    console.log("ENTER PRESSED");
  }
});

// create delete/complete button function for the list item

function createBtn(newLi) {
  let dltButton = document.createElement("button");
  dltButton.innerHTML = "Complete";
  newLi.appendChild(dltButton);
  dltButton.setAttribute("id", "delete-btn");
  list.appendChild(newLi);

  // function to remove the completed task
  dltButton.addEventListener("click", function () {
    list.removeChild(newLi);
  });
}

for (var i = 0; i < newLi.length; i++) {
  createBtn(newLi[i]);
}
