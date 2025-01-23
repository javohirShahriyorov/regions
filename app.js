addEventListener("DOMContentLoaded", (event) => {});

const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

// slider button 

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
});
prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})

const audio = document.getElementById('audio');
const toggleButton = document.getElementById('toggle-button');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');



// Toggle
toggleButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    toggleIcon.classList.replace('fa-play', 'fa-pause'); 
    toggleText.textContent = 'Pause'; 
  } else {
    audio.pause();
    toggleIcon.classList.replace('fa-pause', 'fa-play'); 
    toggleText.textContent = 'Play';
  }
});
