// You can add more functionality here if needed, such as autoplay, looping, etc.
const audioPlayer = document.getElementById('audioPlayer');

// Example of event listeners you can use to add more interactivity
audioPlayer.addEventListener('play', () => {
  console.log('Audio started playing');
});

audioPlayer.addEventListener('pause', () => {
  console.log('Audio paused');
});

audioPlayer.addEventListener('ended', () => {
  console.log('Audio playback ended');
});
