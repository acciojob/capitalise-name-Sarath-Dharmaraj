//your JS code here. If required.
let nameInput = document.getElementById('fname');

nameInput.addEventListener('blur', (e) => {
  e.target.value = e.target.value.toUpperCase();
});