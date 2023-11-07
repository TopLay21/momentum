const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpeg", "5.jpg", "6.jpg", "7.jpeg", "8.jpg", "9.jpg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const body = document.body;
body.style.backgroundImage = `url('img/${chosenImages}')`;
body.style.backgroundSize = 'cover';
body.style.backgroundPosition = 'center';
body.style.backgroundRepeat = 'no-repeat';
