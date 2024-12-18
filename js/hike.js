const scrollContainer = document.getElementById('scrollContainer');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

// Scrolling with mouse
scrollContainer.addEventListener('wheel', (event) => {
  event.preventDefault();
  scrollContainer.scrollLeft += event.deltaY;
  updateArrows();
});

// Function to scroll left
function moveLeft() {
  scrollContainer.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
  setTimeout(updateArrows, 300);
}

// Function to scroll right
function moveRight() {
  scrollContainer.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
  setTimeout(updateArrows, 300);
}

// Update arrows visibility
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

// Initialize arrows on page load
updateArrows();
