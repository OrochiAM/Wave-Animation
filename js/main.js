const tl = gsap.timeline({ repeat: -1 });

tl.to('img', {
  xPercent: '+=50',
  duration: 5,
  ease: 'none',
}).set('img', {
  xPercent: '-=50',
});
