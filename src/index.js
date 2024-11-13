import "./styles.css";

import {addProjectToArray, createProject, discardProject, editProject } from "./modules/projectManager";
import { addListers } from "./modules/eventManager";


addListers()

//discardProject()

/*
console.log("Hi")

document.querySelector('#theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

*/

  //createProjectUI(projectName,taskNumber, indicatorColor);
  //createProjectUI("Career", 3, "#FFFFFF");
  //createProjectUI("Sports", 14, "#FFC0CB");


  /*
// Create general project
const generalProject = createProject("General", "0", "#555555");
console.log(generalProject)



// Create new project
document.getElementById("createProjectBtn").addEventListener('click', () => {
  const editableProjectCard = document.querySelector('.editableProjectCard');
  if(editableProjectCard){
    console.log("there is")
    replaceEditableProjectUI(); // replace open editable 
    createEditableProjectUI(); // create new 

  }else{console.log("there is not")
  createEditableProjectUI();
  }
});


*/








//User discards project that is in edit mode
