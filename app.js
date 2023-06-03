// Selecting DOM elements
const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

// END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

// SCROLLMAGIC
const controller = new ScrollMagic.Controller();

// Creating Scenes
let scene = new ScrollMagic.Scene({
  duration: 9000, // Duration of the scene in pixels
  triggerElement: intro, // Element that triggers the scene
  triggerHook: 0, // Starting point of the scene (0: top, 1: bottom)
})
  .addIndicators() // Add indicators (optional, for debugging)
  .setPin(intro) // Pin the element during the scene
  .addTo(controller); // Add the scene to the controller

// Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 }); // Define the text animation

let scene2 = new ScrollMagic.Scene({
  duration: 3000, // Duration of the scene in pixels
  triggerElement: intro, // Element that triggers the scene
  triggerHook: 0, // Starting point of the scene (0: top, 1: bottom)
})
  .setTween(textAnim) // Set the animation tween
  .addTo(controller); // Add the scene to the controller

// Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);
