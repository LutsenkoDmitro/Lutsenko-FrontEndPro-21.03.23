const options = [
    { name: "smile1", count: 0 },
    { name: "smile2", count: 0 },
    { name: "smile3", count: 0 },
    { name: "smile4", count: 0 },
    { name: "smile5", count: 0 },
];


function vote(optionIndex) {
    options[optionIndex].count++;
    updateResults();
}


function updateResults() {
    const container = document.getElementById("vote-results");
    container.innerHTML = "";

    const row = document.createElement("div");
    row.style.display = "flex";
    for (const option of options) {
        const icon = document.createElement("span");
        icon.classList.add("icon", option.name);
        icon.style.cursor = "pointer";
        icon.addEventListener("click", () => vote(options.indexOf(option)));
        row.appendChild(icon);
    }
    container.appendChild(row);

    for (const option of options) {
        const count = document.createElement("div");
        count.textContent = option.count;
        container.appendChild(count);
    }
}
updateResults();