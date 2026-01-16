const animateWave = (wave, duration) => {
  const tl = gsap.timeline({ repeat: -1 });
  tl.to(wave, {
    xPercent: '+=50',
    duration: duration,
    ease: 'none',
  }).set('img', {
    xPercent: '-=50',
  });
};

animateWave('.w0', 5);
animateWave('.w1', 8);
animateWave('.w2', 12);
