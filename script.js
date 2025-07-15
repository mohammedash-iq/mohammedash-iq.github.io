const learnings = [
  {
    title: "Javascript/React Librart",
    description: "Exploring React and Vanilla js for frontend Devolopment.",
  },
  {
    title: "Backend Technologies",
    description:
      "Learning Backend Technologies like node.js, Express.js, Next.js",
  },
  {
    title: "System Programming",
    description: "Learning how operating systems and memory management work.",
  },
];

const projects = [
  {
    title: "Recipe-Finder",
    description: "A CLI tool for visualizing memory blocks.",
    link: "https://github.com/mohammedash-iq/Recipe-Finder",
  },
];

const timeline = [
  {
    image: "https://via.placeholder.com/60",
    step: "Started programming basics",
  },
  {
    image: "https://via.placeholder.com/60",
    step: "Dove into html, css, javascript",
  },
  {
    image: "https://via.placeholder.com/60",
    step: "Dove into React and node.js",
  },
  {
    image: "https://via.placeholder.com/60",
    step: "Learning system-level concepts",
  },
];

const addCards = (data, containerId) => {
  const container = document.getElementById(containerId);
  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    const titleHTML = `<h3>${item.title}</h3>`;
    const descHTML = `<p>${item.description}</p>`;
    if (item.link) {
      const link = `<a href="${item.link}">Checkout Project</a>`;
      card.innerHTML = `${titleHTML}${descHTML}${link}`;
      container.appendChild(card);
      return;
    }
    card.innerHTML = `${titleHTML}${descHTML}`;
    container.appendChild(card);
  });
};

const addTimelineItems = (data) => {
  const container = document.getElementById("timeline-items");
  data.forEach((item) => {
    const block = document.createElement("div");
    block.className = "timeline-item";
    block.innerHTML = `
            <img src="${item.image}" alt="Step image" />
            <p>${item.step}</p>
          `;
    container.appendChild(block);
  });
};

const toggleTheme = () => {
  const body = document.body;
  const current = body.getAttribute("data-theme");
  body.setAttribute("data-theme", current === "light" ? "dark" : "light");
};

addCards(learnings, "learning-cards");
addCards(projects, "project-cards");
addTimelineItems(timeline);
