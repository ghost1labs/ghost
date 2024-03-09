// Function to check if the viewport is 625px or less
function isViewportLessThanOrEqual625() {
  return window.innerWidth <= 625;
}

// Function to remove the width property from the desired element
function removeWidthProperty(element) {
  element.style.removeProperty('width');
}

// Check if the viewport is 625px or less and remove the width property if true
if (isViewportLessThanOrEqual625()) {
  const element = document.querySelector('#yourElement');
  removeWidthProperty(element);
}

// Add a resize event listener to handle window resizing
window.addEventListener('resize', () => {
  if (isViewportLessThanOrEqual625()) {
    const element = document.querySelector('#yourElement');
    removeWidthProperty(element);
  }
});