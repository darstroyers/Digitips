// JS
document.getElementsByClassName("toggler-navbar")[0].addEventListener("click", toggleClass);

function toggleClass() {
  document.getElementsByClassName("hamburger-menu")[0].classList.toggle('open');
  document.getElementsByClassName("sidebar")[0].classList.toggle('open');
}

const hamburgerMenu = document.querySelector('.hamburger-menu');
const videoPlayer = document.querySelector('.video-player');

hamburgerMenu.addEventListener('click', () => {
  videoPlayer.classList.toggle('menu-open');
});
// Get the necessary elements
const descriptionSection = document.querySelector('.description-section');
const readMoreButton = document.querySelector('.read-more-button');

// Add a click event listener to the button
readMoreButton.addEventListener('click', function() {
  // Toggle the 'expanded' class on the description section
  descriptionSection.classList.toggle('expanded');

  // Update the button text
  if (descriptionSection.classList.contains('expanded')) {
    readMoreButton.textContent = 'Read Less';
  } else {
    readMoreButton.textContent = 'Read More';
  }
});


