// Get the checkbox element with the id 'dark-mode'
const darkmode = document.getElementById('dark-mode');

// Add an event listener to the checkbox
darkmode.addEventListener('change', () => {
  // Toggle the 'dark' class on the body element
  document.body.classList.toggle('dark');
});
