
let popularitySum = 0;
let itemsFound = 0;
const len = victorianSlang.length;
let item = null;
for (let i = 0; i < len; i++) {
    item = victorianSlang[i];
    if (item.found) {
        popularitySum = item.popularity + popularitySum;
        itemsFound = itemsFound + 1;

    }
    const averagePopularity = popularitySum / itemsFound;
    console.log("Average popularity:", averagePopularity);