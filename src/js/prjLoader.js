import projects from "./projects";

const loadProjects = () => {
  const projectsContainer = document.querySelector(".site-projects");
  if(!projectsContainer) return;

  projectsContainer.innerHTML="";
  projects.forEach(project => {
    let locale = Object.keys(project.description).find(d => d === document.documentElement.lang) || "en";
    const article = document.createElement('article');
    article.classList.add("site-projects__item");
    article.innerHTML = `
    <a class="project__visual" target="_blank" href="${project.url}">
      <img class="project__img" src="${(locale === "en") ? project.img : `../${project.img}`}">
    </a>
    <header class="project__header">
      <h3 class="project__title">${project.name}</h3>
      <section class="project__actions">
        <a class="project__link" target="_blank" href="${project.url}">${project.vistProjMsg[locale]}</a>
        <button class="project__showmore" type="button">${project.showMoreMsg[locale]}</button>
      </section>
    </header>
    <section class="project__description">${project.description[locale]}</section>
    `;

    projectsContainer.appendChild(article);
  });
};

export default () => {
  loadProjects();
};