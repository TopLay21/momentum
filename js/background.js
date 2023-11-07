const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpeg", "5.jpg", "6.jpg", "7.png", "8.jpg", "9.jpg"];
const preloadedImages = [];

for (const imageSrc of images) {
  const img = new Image();
  img.src = `img/${imageSrc}`;
  preloadedImages.push(img);
}

const randomIndex = Math.floor(Math.random() * preloadedImages.length);
const chosenImage = preloadedImages[randomIndex];

const body = document.body;
body.style.backgroundImage = `url('${chosenImage.src}')`;
body.style.backgroundSize = 'cover';
body.style.backgroundPosition = 'center';
body.style.backgroundRepeat = 'no-repeat';
