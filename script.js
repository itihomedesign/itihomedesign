let currentSlide = 0;
let slideshowImages = [];

// Seturile de imagini pentru fiecare slideshow
const slideshowData = [
    ['./imagini/casa23.jpg', './imagini/casa19.jpg', './imagini/casa20.jpg', './imagini/casa21.jpg', './imagini/casa22.jpg', './imagini/casa18.jpg','./imagini/casa24.jpg'], // Set pentru Poza 1
    ['./imagini/poza107.jpg', './imagini/poza98.jpg', './imagini/poza99.jpg', './imagini/poza100.jpg', './imagini/poza101.jpg', './imagini/poza102.jpg','./imagini/poza103.jpg', './imagini/poza104.jpg', './imagini/poza105.jpg','./imagini/poza106.jpg'], // Set pentru Poza 2
    ['./imagini/poza94.jpg', './imagini/poza93.jpg', './imagini/poza95.jpg', './imagini/poza96.jpg', './imagini/poza97.jpg'], // Set pentru Poza 3
    ['./imagini/casa14.jpg', './imagini/casa2.jpg', './imagini/casa3.jpg', './imagini/casa4.jpg', './imagini/casa5.jpg', './imagini/casa6.jpg','./imagini/casa7.jpg','./imagini/casa8.jpg', './imagini/casa9.jpg', './imagini/casa10.jpg', './imagini/casa11.jpg', './imagini/casa12.jpg', './imagini/casa13.jpg','./imagini/casa15.jpg','./imagini/casa16.jpg', './imagini/casa17.jpg'], // Set pentru Poza 4
    ['./imagini/birou2.jpg', './imagini/birou1.jpg', './imagini/birou3.jpg', './imagini/birou5.jpg'] // Set pentru Poza 5
];

// Funcția care deschide slideshow-ul pentru o poză
function openSlideshow(imageId) {
    slideshowImages = slideshowData[imageId - 1]; // Selectăm setul corect de imagini
    currentSlide = 0; // Începem cu prima imagine
    showSlide(); // Afișăm prima imagine din slideshow
    document.getElementById('slideshow-modal').style.display = 'flex'; // Deschidem modalul
}

// Funcția care închide slideshow-ul
function closeSlideshow() {
    document.getElementById('slideshow-modal').style.display = 'none'; // Închidem modalul
}

// Funcția care afișează o imagine din slideshow
function showSlide() {
    const content = document.querySelector('.slideshow-content');
    content.innerHTML = `<img src="${slideshowImages[currentSlide]}" alt="Slideshow" class="slideshow-image">`; // Afișează imaginea curentă
}

// Funcția care schimbă imaginea în funcție de direcția aleasă
function changeSlide(n) {
    currentSlide += n; // Schimbăm indexul imaginii curente
    if (currentSlide < 0) {
        currentSlide = slideshowImages.length - 1; // Dacă ajungem la început, revenim la ultima imagine
    }
    if (currentSlide >= slideshowImages.length) {
        currentSlide = 0; // Dacă ajungem la sfârșit, revenim la prima imagine
    }
    showSlide(); // Afișăm imaginea curentă
}

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("slideshow-modal");

  if (modal) {
    document.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeSlideshow();
      }
    });
  }
});




/*-    modal contact formular */
 const modal = document.getElementById("contactModal");
  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = document.querySelector(".close-button44");

  openBtn.onclick = () => {
    modal.style.display = "block";
  }

  closeBtn.onclick = () => {
    modal.style.display = "none";
  }

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }











