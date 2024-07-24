// Get the flip-card-inner element
var flipCardInner = document.querySelector('.flip-card-inner');

// Get the flip-card-front and flip-card-back elements
var flipCardFront = document.querySelector('.flip-card-front');
var flipCardBack = document.querySelector('.flip-card-back');

// Add event listener to flip-card-front element
flipCardFront.addEventListener('click', function() {
  // Toggle the clicked class on flip-card-inner element
  flipCardInner.classList.toggle('clicked');
});

// Add event listener to flip-card-back element
flipCardBack.addEventListener('click', function() {
  // Remove the clicked class from flip-card-inner element
  flipCardInner.classList.remove('clicked');
});