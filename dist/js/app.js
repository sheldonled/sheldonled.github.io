(function () {
  'use strict';

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

      showHideHandler(element, "config__button", "config__menu--open", "site-header", "config__menu");
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

  //import loadProjects from "./prjLoader";

  try{
    //loadProjects();
    addListeners();
    topPannel.init();
  }
  catch(e) {
    console.error("An error ocurred while executing this site's script:\n", e);//eslint-disable-line
  }

}());
//# sourceMappingURL=app.js.map
