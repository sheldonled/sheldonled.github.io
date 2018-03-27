
import dom from './dom';

const showHideHandler = (elem, classElem, classOpen, classParent, classTarget) => {
  if(!elem.classList.contains(classElem)) return;

  const targetElem = dom.findSiblind(elem, classParent, classTarget);
  if(!targetElem) return;

  targetElem.classList.toggle(classOpen);
};

export default () => {
  document.addEventListener("click", (event) => {
    const element = event.target;

    showHideHandler(element, "config__button", "config__menu--open", "site-header", "config__menu");
    showHideHandler(element, "project__showmore", "project__description--open", "site-projects__item", "project__description");
  });
};