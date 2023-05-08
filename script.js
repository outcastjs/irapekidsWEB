const myAudio = document.querySelector('#my-audio');
const myH1 = document.querySelector('.player');

myH1.addEventListener('click', function() {
  if (myAudio.paused) {
    myAudio.play().then(() => {
      myH1.classList.add("playing");
    }).catch(error => {
      console.log(error);
    });
  } else {
    myAudio.pause();
    myH1.classList.remove("playing");
  }
});