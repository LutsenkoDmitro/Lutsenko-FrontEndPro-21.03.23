const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];
const randomIndex = Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];

const img = document.createElement("img");
img.src = `images/${randomImage}`;

document.body.appendChild(img);

