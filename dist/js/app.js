(function () {
'use strict';

var projects = [
  {
    "name":"Easy GD",
    "img":"img/easygd.png",
    "url":"http://github.sheldonled.com/easygd/",
    "vistProjMsg": {
      "en": "visit project",
      "pt-BR": "visitar projeto",
    },
    "showMoreMsg": {
      "en": "show more",
      "pt-BR": "veja mais",
    },
    "description": {
      "en": `<p>Easy GD is a project that uses Google Drive API
        to manage files on your Google Drive Account. It's just a simple project,
        doesn't have special features. The main goal of this project is to show 
        how simple it is to work with Google Drive API.</p>`,

      "pt-BR": `<p>Easy GD é um projeto que usa a API do Google Drive
        para gerenciar arquivos na sua conta do Google Drive. Isto é um projeto simples,
        não tem características especiais. O principal objetivo deste projeto é mostrar
        o quão simples é trabalhar com a API Google Drive.</p>`,
    },
  },
  {
    "name":"Hey VR!",
    "img":"img/mozvr.png",
    "url":"http://github.sheldonled.com/heyvr",
    "vistProjMsg": {
      "en": "visit project",
      "pt-BR": "visitar projeto",
    },
    "showMoreMsg": {
      "en": "show more",
      "pt-BR": "veja mais",
    },
    "description": {
      "en": `<p>It's a pool of examples using VR framworks. By the moment the only Framework
          used is <a href='https://aframe.io' target='_blank'>A-Frame</a>.</p>
          <p><a href='http://github.sheldonled.com/heyvr/myhelloworld.html' target='_blank'>See hello world example</a>.</p>`,

      "pt-BR": `<p>É apenas um repositório de exemplos usando biblitecas de Realidade Virtual.
        No momento a única biblioeca utilizada é o <a href='https://aframe.io' target='_blank'>A-Frame</a>.</p>
        <p><a href='http://github.sheldonled.com/heyvr/myhelloworld.html' target='_blank'>Veja meu 'hello world'</a>.</p>`,
    },
  },
  {
    "name":"FootNotes",
    "img":"img/footnotes.png",
    "url":"http://github.sheldonled.com/footnotes",
    "vistProjMsg": {
      "en": "visit project",
      "pt-BR": "visitar projeto",
    },
    "showMoreMsg": {
      "en": "show more",
      "pt-BR": "veja mais",
    },
    "description": {
      "en": `<p>A piece of JavaScript/JQuery code that shows notes about
        something in your website. The best way to understand is to
        <a href='http://github.sheldonled.com/footnotes' target='_blank'>Take a look</a>.</p>`,

      "pt-BR": `<p>Um pedaço de código JavaScript/JQuery que mostra notas sobre
        alguma coisa no seu site. A melhor forma de entender este projeto é
        <a href='http://github.sheldonled.com/footnotes' target='_blank'>Ver uma demonstração online</a>.</p>`,
    },
  },
  {
    "name":"Coplacar",
    "img":"img/coplacar.png",
    "url":"http://github.sheldonled.com/coplacar",
    "vistProjMsg": {
      "en": "visit project",
      "pt-BR": "visitar projeto",
    },
    "showMoreMsg": {
      "en": "show more",
      "pt-BR": "veja mais",
    },
    "description": {
      "en": `<p>Coplacar is a webapp that shows the placar of the world cup games of 2014.
        It all started with a piece of code of professor Fernando Masanori called
        <a href='https://gist.github.com/fmasanori/1288160dad16cc473a53' target='_blank'>World Cup in six lines of Python 3</a>,
        I saw the link that retrieves the results of the matches in a json file, so I decided to make an app with it.</p>`,

      "pt-BR": `<p>Coplacar é uma WebApp que mostra o placar da Copa do Mundo de 2014.
        Tudo começou com um pequeno pedaço de código que o professor Fernando Masanori postou como
        <a href='https://gist.github.com/fmasanori/1288160dad16cc473a53' target='_blank'>Jogos da Copa do Mundo em seis linhas de Python 3</a>,
        Eu vi que o link obtinha os resultados dos jogos em um arquivo JSON, então eu decidi fazer um App com isso.</p>`,
    },
  },
  {
    "name":"Play Compras",
    "img":"img/playcompras.png",
    "url":"http://github.sheldonled.com/playcompras",
    "vistProjMsg": {
      "en": "visit project",
      "pt-BR": "visitar projeto",
    },
    "showMoreMsg": {
      "en": "show more",
      "pt-BR": "veja mais",
    },
    "description": {
      "en": `<p>A webapp that allows users to add items in a list and see the total money they'll waste.</p>`,
      "pt-BR": `<p>Uma WebApp que permite usuários adicionarem itens em uma lista e verem o valor total que eles irão gastar.</p>`,
    },
  },
  {
    "name":"Music Fun",
    "img":"img/musicfun.png",
    "url":"http://github.sheldonled.com/musicfun",
    "vistProjMsg": {
      "en": "visit project",
      "pt-BR": "visitar projeto",
    },
    "showMoreMsg": {
      "en": "show more",
      "pt-BR": "veja mais",
    },
    "description": {
      "en": `<p>A webapp sample using oscilator from Web Audio API</p>`,
      "pt-BR": `<p>Um exemplo de WebApp usando oscilador da API Web Audio</p>`,
    },
  },
  {
    "name":"Alfa Notas",
    "img":"img/alfanotas.png",
    "url":"http://github.sheldonled.com/alfanotas",
    "vistProjMsg": {
      "en": "visit project",
      "pt-BR": "visitar projeto",
    },
    "showMoreMsg": {
      "en": "show more",
      "pt-BR": "veja mais",
    },
    "description": {
      "en": `<p>A webapp that allows students from <a href='http://www.alfa.br' target='_blank'>Faculdade Alfa</a> calculate their grade.</p>`,
      "pt-BR": `<p>Uma WebApp que permite os estudantes da <a href='http://www.alfa.br' target='_blank'>Faculdade Alfa</a> calcularem suas notas.</p>`,
    },
  }
];

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

var loadProjects$1 = () => {
  loadProjects();
};

const isRootElem = elem => elem.nodeName.toLocaleLowerCase() === "body" || !elem.parentNode;
const findParendByClass = (elem, className) => {
  if(elem.classList.contains(className) || isRootElem(elem))
    return elem;
  
  return findParendByClass(elem.parentNode, className);
};
const findSiblind = (element, parentClass, siblingClass) => {
  const parentElement = findParendByClass(element, parentClass);
  if(!parentElement || !parentElement.classList.contains(parentClass)) return;

  return parentElement.querySelector(`.${siblingClass}`);
};

var dom = {isRootElem,findParendByClass,findSiblind};

const showHideHandler = (elem, classElem, classOpen, classParent, classTarget) => {
  if(!elem.classList.contains(classElem)) return;

  const targetElem = dom.findSiblind(elem, classParent, classTarget);
  if(!targetElem) return;

  targetElem.classList.toggle(classOpen);
};

var addListeners = () => {
  document.addEventListener("click", (event) => {
    const element = event.target;

    showHideHandler(element, "icon__settings", "config__menu--open", "site-header", "config__menu");
    showHideHandler(element, "project__showmore", "project__description--open", "site-projects__item", "project__description");
  });
};

const messages = {
  outdatedBrowser: {
    "en": "You're using an outdated browser. This beautiful message is to advise you to get an up to date browser and have a better experience online =)",
    "pt-BR": "Você está usando um navegador desatualizado. Esta linda mensagem está aqui para lembrá-lo de atualizar seu navegador e ter uma vida melhor =)",
  }
};

const handleEs6Support = () => {
  //Leverage the same global function used to load es5 scripts
  if(window.supportEs6()) return;
  
  let locale = Object.keys(messages.outdatedBrowser).find(d => d === document.documentElement.lang) || "en";
  error(messages.outdatedBrowser[locale]);
};

const setTopPannelState = state => {
  const topPannel = document.querySelector('.top-pannel');
  if(!topPannel) return;

  window.requestAnimationFrame(() => {
    topPannel.innerHTML = state.content;
    topPannel.style.display = state.display;
    topPannel.style.backgroundColor = state.backgroundColor;
  });
};

const hide = () => setTopPannelState({
  display: "none",
  backgroundColor: "rgb(141, 197, 197)",
  content: ""
});

const message = text => setTopPannelState({
  display: "block",
  backgroundColor: "rgb(141, 197, 197)",
  content: `<span>${text}</span>`
});

const warn = text => setTopPannelState({
  display: "block",
  backgroundColor: "rgb(255, 243, 202)",
  content: `<span>${text}</span>`
});

const error = text => setTopPannelState({
  display: "block",
  backgroundColor: "rgb(255, 182, 182)",
  content: `<marquee>${text}</marquee>`
});

const init = () => {
  handleEs6Support();
};

var topPannel = {init, hide, message, warn, error};

try{
  loadProjects$1();
  addListeners();
  topPannel.init();
}
catch(e) {
  console.error("An error ocurred while executing this site's script:\n", e);//eslint-disable-line
}

}());
//# sourceMappingURL=app.js.map
