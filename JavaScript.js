function toggleLogin() {
    var checkbox = document.getElementById("login");
    checkbox.checked = !checkbox.checked;
}

function showAlert() {
    alert("This is an alert!");
}

function addExploreMoreItem() {
    var ul = document.querySelector(".list-group");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("New Item"));
    li.className = "list-group-item";
    ul.appendChild(li);
}
