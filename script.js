//your JS code here. If required.
// Get the form element
const form = document.querySelector('form');

// Add an event listener for the form submission
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values from the form inputs
  const fontSize = form.elements['fontsize'].value;
  const fontColor = form.elements['fontcolor'].value;

  // Set cookies with the user's preferences
  document.cookie = `fontsize=${fontSize}; max-age=31536000`; // 1 year expiration
  document.cookie = `fontcolor=${fontColor}; max-age=31536000`; // 1 year expiration

  // Update the CSS variables with the user's preferences
  document.documentElement.style.setProperty('--fontsize', `${fontSize}px`);
  document.documentElement.style.setProperty('--fontcolor', fontColor);
});

