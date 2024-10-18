const images = [
    'https://s00.yaplakal.com/pics/pics_original/9/8/1/15089189.png',
    'https://a.d-cd.net/8c52e49s-1920.jpg',
    'https://a.d-cd.net/d6e2a1as-960.jpg',
];

let ImgIndex = 0;

function showImage(index) {
    const imgElement = document.getElementById('carousel-image');
    imgElement.src = images[index];
}

// Функция для показа следующей картинки
function nextImage() {
    ImgIndex = (ImgIndex + 1) % images.length;
    showImage(ImgIndex);
}

// Функция для показа прошлой картинки
function prevImage() {
    ImgIndex = (ImgIndex - 1 + images.length) % images.length;
    showImage(ImgIndex);
}

setInterval(nextImage, 3000);

document.getElementById('prev-btn').addEventListener('click', prevImage);
document.getElementById('next-btn').addEventListener('click', nextImage);

showImage(ImgIndex);
