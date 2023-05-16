function showDiv() {
    const div = document.getElementById("customDiv");
    div.style.display = "block";
}

function hideDiv() {
    var div = document.getElementById("customDiv");
    div.style.display = "none";
}
const textField = document.getElementById("textField");
textField.addEventListener("focus", showDiv);
textField.addEventListener("blur", hideDiv);