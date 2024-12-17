const scrollContainer = document.getElementById('scrollContainer');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

// Posouvání myší
scrollContainer.addEventListener('wheel', (event) => {
  event.preventDefault();
  scrollContainer.scrollLeft += event.deltaY;
  updateArrows();
});

// Funkce pro posouvání vlevo
function moveLeft() {
  scrollContainer.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
  setTimeout(updateArrows, 300);
}

// Funkce pro posouvání vpravo
function moveRight() {
  scrollContainer.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
  setTimeout(updateArrows, 300);
}

// Aktualizace šipek pro viditelnost
function updateArrows() {
  const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

  if (scrollContainer.scrollLeft > 0) {
    leftArrow.style.visibility = 'visible';
  } else {
    leftArrow.style.visibility = 'hidden';
  }

  if (scrollContainer.scrollLeft < maxScrollLeft) {
    rightArrow.style.visibility = 'visible';
  } else {
    rightArrow.style.visibility = 'hidden';
  }
}

// Inicializace šipek při načtení stránky
updateArrows();
