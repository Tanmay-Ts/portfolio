import { gsap } from "gsap";

gsap.from(".title", {
  y: -100,
  opacity: 0,
  duration: 1.2
});

gsap.from(".card", {
  opacity: 0,
  y: 80,
  stagger: 0.3,
  duration: 1.5
});