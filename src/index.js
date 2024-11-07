import "./styles.css";
import { createProjectUI, createEditableProjectUI, replaceEditable, replaceEditableProjectUI } from "./modules/projectsUI";
import { createModalOverlay } from "./modules/modal";

/*
console.log("Hi")

document.querySelector('#theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

*/

  //createProjectUI(projectName,taskNumber, indicatorColor);
  //createProjectUI("Career", 3, "#FFFFFF");
  //createProjectUI("Sports", 14, "#FFC0CB");

document.getElementById("createProjectBtn").addEventListener('click', () => {
  //createProjectUI("Career", 3, "#FFFFFF");
  
  const editableProjectCard = document.querySelector('.editableProjectCard');
  if(editableProjectCard){
    console.log("there is")
    replaceEditableProjectUI(); // replace open editable 
    createEditableProjectUI(); // create new 

  }else{console.log("there is not")
  createEditableProjectUI();
}

  //createEditableProjectUI();

  
  //editableProjectCard.remove();


});