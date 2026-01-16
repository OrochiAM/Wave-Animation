const w0 = document.querySelector('.w0');
const w1 = document.querySelector('.w1');
const w2 = document.querySelector('.w2');

const animateWave = (wave, duration) => {
  const tl = gsap.timeline({ repeat: -1 });
  tl.to(wave, {
    xPercent: '+=50',
    duration: duration,
    ease: 'none',
  }).set(wave, {
    xPercent: '-=50',
  });
};

animateWave(w0, 5);
animateWave(w1, 7);
animateWave(w2, 10);

let hueR = 0;

const hueRotate = () => {
  hueR++;

  w0.style.filter = `hue-rotate(${hueR}deg)`;
  w1.style.filter = `hue-rotate(${hueR + 10}deg)`;
  w2.style.filter = `hue-rotate(${hueR + 20}deg)`;
};

setInterval(hueRotate, 100);
