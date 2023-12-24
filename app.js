const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


const tl = gsap.timeline({ defaults: { ease: "power1.out" } });


tl.to(".text", { y: "0%", duration: 0.1, stagger: 0.25 })
  .to(".stext1", { opacity: "1", duration: 0.25 })
  .to(".stext1", { opacity: "0", duration: 0.25 })
  .to(".stext2", { opacity: "1", duration: 0.25 })
  .to(".stext2", { opacity: "0", duration: 0.25 })
  .to(".stext3", { opacity: "1", duration: 0.25 })
  .to(".stext3", { opacity: "0", duration: 0.25 })
  .to(".stext4", { opacity: "1", duration: 0.25 })
  .to(".stext4", { opacity: "0", duration: 0.25 })
  .to(".stext5", { opacity: "1", duration: 0.7 })
  .to(".intro", { opacity: "0", duration: 1 })
  .fromTo(".hero", { opacity: "0" }, { opacity: "1", duration: 1 })
  .call(playVideo, ["hero-video"], "-=1");

function playVideo(el) {
  let vid = document.getElementById(el);
  vid.play();
  console.log('playing video');
}

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.features',
    start: 'top-=15px top',
    end: 'bottom+=7000 200px',
    scrub: true,
    markers: true,
    pin: '.feature-wrap'
  }
})

tl2.to(".feature-img1", { x: "-1000%", duration: 1 })
  .to('.feat-disc1', { opacity: "0", duration: 0.25 },"-=1")
  .fromTo(".feature-img2", { x: "1000%"},{x:"0%",duration:1})
  .to('.feat-disc2', { opacity: "1", duration: 0.25 },)
  .to('.feat-disc2', { opacity: "0", duration: 0.25 },)
  .fromTo(".feature-img3", { x: "1000%"},{x:"0%",duration:1})
  .to('.feat-disc3', { opacity: "1", duration: 0.25 },)
  .to('.feat-disc3', { opacity: "0", duration: 0.25 },)
  .fromTo(".feature-img4", { x: "1000%"},{x:"0%",duration:1})
  .to('.feat-disc4', { opacity: "1", duration: 0.25 },)
  