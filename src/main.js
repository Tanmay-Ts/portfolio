import "./style.css";

import "./js/threeScene.js";
import "./js/animations.js";
import "./js/particles.js";
import "./js/scroll.js";

async function loadGitHubProjects() {
  const container = document.getElementById("project-container");

  try {
    const res = await fetch(
      "https://api.github.com/users/Tanmay-Ts/starred?sort=updated"
    );

    const repos = await res.json();

    // Optional: filter out forks or empty repos
    const filtered = repos.filter(
      repo => !repo.fork && repo.description
    );

    filtered.forEach(repo => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description provided."}</p>
        <div class="links">
          <a href="${repo.html_url}" target="_blank">GitHub</a>
          ${
            repo.homepage
              ? `<a href="${repo.homepage}" target="_blank">Demo</a>`
              : ""
          }
        </div>
      `;

      container.appendChild(card);
    });
  } catch (err) {
    console.error("GitHub fetch failed:", err);
  }
}
const skillsBtn = document.getElementById("skills-btn");
const modal = document.getElementById("skills-modal");
const closeBtn = document.getElementById("close-modal");

skillsBtn.onclick = () => {
  modal.style.display = "flex";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};


loadGitHubProjects();
