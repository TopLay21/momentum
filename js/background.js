const images = ["0.webp", "1.jpg", "2.jpg", "3.jpg", "4.jpeg", "5.jpg", "6.jpg", "7.jpeg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const body = document.body;
body.style.backgroundImage = `url('img/${chosenImages}')`;
body.style.backgroundSize = 'cover';
body.style.backgroundPosition = 'center';
body.style.backgroundRepeat = 'no-repeat';
