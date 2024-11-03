const images = document.querySelectorAll('.shoe-image');
let currentIndex = 0;

function rotateImages() {
    images.forEach((img, index) => {
        img.classList.toggle('active', index === currentIndex);
    });
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(rotateImages, 3000); // Change image every 3 seconds
