// script.js

const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Open Lightbox
galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = item.src;
    currentIndex = index;
  });
});

// Close Lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Next Image
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  lightboxImg.src = galleryItems[currentIndex].src;
});

// Prev Image
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  lightboxImg.src = galleryItems[currentIndex].src;
});

// Close on outside click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
