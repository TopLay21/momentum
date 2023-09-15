const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");

//bgImage.src = `img/${chosenImages}`;

//document.body.appendChild(bgImage);

const body = document.body;
body.style.backgroundImage = `url('img/${chosenImages}')`;
body.style.backgroundSize = 'cover';
body.style.backgroundPosition = 'center';
body.style.backgroundRepeat = 'no-repeat';