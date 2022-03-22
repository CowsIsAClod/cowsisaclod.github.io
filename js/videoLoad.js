let urlParams = new URLSearchParams(window.location.search);
const videoLoc = urlParams.get('path')
var video = document.getElementById('video');
var source = document.createElement('source');

source.setAttribute('src', videoLoc);
source.setAttribute('type', 'video/mp4');

video.appendChild(source);
video.play();
console.log({
  src: source.getAttribute('src'),
  type: source.getAttribute('type'),
});

setTimeout(function() {
  video.pause();

  source.setAttribute('src', videoLoc);
  source.setAttribute('type', 'video/mp4');

  video.load();
  video.play();
  console.log({
    src: source.getAttribute('src'),
    type: source.getAttribute('type'),
  });
}, 3000);