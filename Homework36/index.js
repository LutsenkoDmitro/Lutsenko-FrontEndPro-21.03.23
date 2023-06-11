const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

const offersFilePath = path.join(__dirname, 'offers.txt');


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    generateOffers();
});


function generateOffers() {
    const offers = [];
    for (let i = 0; i < 25; i++) {
        const offer = {
            id: generateId(),
            name: generateName(),
            coordinate: generateCoordinate(),
        };
        offers.push(offer);
    }
    fs.writeFile(offersFilePath, JSON.stringify(offers), (err) => {
        if (err) throw err;
        console.log('Offers file has been generated');
    });
}


function generateId() {
    return Math.random().toString(36).substr(2, 9);
}


function generateName() {
    const names = ['Offer 1', 'Offer 2', 'Offer 3', 'Offer 4', 'Offer 5'];
    return names[Math.floor(Math.random() * names.length)];
}


function generateCoordinate() {
    const lat = getRandomNumber(36, 37.5);
    const lang = getRandomNumber(36, 37.5);
    return [lat, lang];
}


function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}


app.get('/offers', (req, res) => {
    fs.readFile(offersFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

app.get('/photos', (req, res) => {
    fs.readFile(offersFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(data);
        }
    });
});

app.post('/offers', (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', () => {
        try {
            const offer = JSON.parse(body);
            fs.readFile(offersFilePath, 'utf8', (err, data) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Internal Server Error');
                } else {
                    const offers = JSON.parse(data);
                    offers.push(offer);
                    fs.writeFile(offersFilePath, JSON.stringify(offers), (err) => {
                        if (err) {
                            console.error(err);
                            res.status(500).send('Internal Server Error');
                        } else {
                            res.send('Offer has been added successfully');
                        }
                    });
                }
            });
        } catch (error) {
            console.error(error);
            res.status(400).send('Bad Request');
        }
    });
});