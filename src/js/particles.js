import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

async function initParticles() {
  await loadSlim(tsParticles);

  await tsParticles.load({
    id: "particles",
    options: {
      particles: {
        number: { value: 60 },
        size: { value: 2 },
        move: { speed: 1 },
        opacity: { value: 0.4 }
      }
    }
  });
}

initParticles();
