function playSound (event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const div = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0; // rewind to the start
  audio.play();
  div.classList.add('playing');
};

function removeTransition(event) {
  console.log(event);
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll(`.key`)
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound)
