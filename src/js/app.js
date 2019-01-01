//import loadProjects from "./prjLoader";
import addListeners from "./listeners";
import topPannel from "./topPannel";

try{
  //loadProjects();
  addListeners();
  topPannel.init();
}
catch(e) {
  console.error("An error ocurred while executing this site's script:\n", e);//eslint-disable-line
}