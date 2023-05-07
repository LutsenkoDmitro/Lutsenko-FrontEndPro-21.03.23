const table = document.createElement("table");

for (let i = 0; i < 10; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 10; j++) {
        const cell = document.createElement("td");
        const cellText = document.createTextNode(i * 10 + j + 1);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    table.appendChild(row);
}

document.body.appendChild(table);