const votingData = [
    { name: "smile1", count: 0 },
    { name: "smile2", count: 0 },
    { name: "smile3", count: 0 },
    { name: "smile4", count: 0 },
    { name: "smile5", count: 0 },
];


function vote(smiley) {
    votingData[smiley]++;
    displayResults();
}

function displayResults() {
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = "";

    for (const smiley in votingData) {
        const count = votingData[smiley];

        const smileyElement = document.createElement("span");
        smileyElement.innerHTML = smiley;
        smileyElement.onclick = function() {
            vote(this.innerHTML);
        };

        const countElement = document.createElement("span");
        countElement.innerHTML = count;


        resultContainer.appendChild(smileyElement);
        resultContainer.appendChild(countElement);
    }
}

window.onload = displayResults;