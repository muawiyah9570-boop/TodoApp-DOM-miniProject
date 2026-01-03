let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(e) {
    e.preventDefault();
    let item = document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item);
    console.log(input.value);
    input.value = "";

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    item.appendChild(deleteBtn);
});

ul.addEventListener("click", function (e) {
  if (e.target.innerText === "delete") {
    e.target.parentElement.remove();
  }
});