import { createModalOverlay } from "./modal.js";
import { addProjectToArray, createProject, saveProject } from "./projectManager.js";
import { createEditableProjectCard, replaceEditableProjectCard } from "./uiManager";
import { rgbStringToHex } from "./utilityFunctions";

function addListers(){
  document.getElementById("createProjectBtn").addEventListener('click', (event) => {
    const editableProjectCard = document.querySelector('.editableProjectCard');
    if(editableProjectCard){
      const projectsContainer = document.querySelector('.projectsContainer');
      const parentDiv = projectsContainer.lastElementChild;
      const currentProjectColor = parentDiv.children[0].value;
      const currentProjectName = (parentDiv.children[1].children[0]).textContent;
      const currentTasksNumber = (parentDiv.children[1].children[1]).textContent;
      let newProject = createProject(currentProjectName, currentTasksNumber[0], currentProjectColor);
      saveProject(newProject);
      replaceEditableProjectCard(); // replace open editable 
      createEditableProjectCard();
    }else{
    createEditableProjectCard();
    }
  });
}
  
function addListenersEditableProjectCard() {
  document.getElementById("saveBtn").addEventListener('click', () => {
      const projectsContainer = document.querySelector('.projectsContainer');
      const parentDiv = projectsContainer.lastElementChild;
      const currentProjectColor = parentDiv.children[0].value;
      const currentProjectName = (parentDiv.children[1].children[0]).textContent;
      const currentTasksNumber = (parentDiv.children[1].children[1]).textContent;
      let newProject = createProject(currentProjectName, currentTasksNumber[0], currentProjectColor);
      saveProject(newProject);
      replaceEditableProjectCard();
  });
  
  document.getElementById("discardBtn").addEventListener('click', (event) => {
    const projectToDelete = event.target.closest('article');
    const modalOverlay = document.querySelector('.modalOverlay');
    if(!modalOverlay){
    createModalOverlay(projectToDelete);
    }
  });  
}

function addListenersProjectCard(){
  const editBtns = document.querySelectorAll('.editProjectBtn');
  editBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      const parentDiv = event.target.closest('article')
      const currentProjectColor = getComputedStyle(parentDiv.children[0]).backgroundColor;
      const currentProjectName = (parentDiv.children[1].children[0]).textContent;
      const currentTasksNumber = (parentDiv.children[1].children[1]).textContent;
      parentDiv.remove();
      createEditableProjectCard(currentProjectName, currentTasksNumber[0], rgbStringToHex(currentProjectColor));
    });
  });
  
  const deleteBtns = document.querySelectorAll('.deleteProjectBtn');
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      const projectToDelete = event.target.closest('article');
      createModalOverlay(projectToDelete);
    });
  }); 
}

export {addListers, addListenersEditableProjectCard, addListenersProjectCard}

/*


if save project is pressed
    JS  save project

    UI
    remove the editable project card
    render project card

if delete btn is pressed (editable and project card)
    JS if yes delete project
    save 

    UI render modal
    if yes {
        remove card / editable card
    }

if edit btn is pressed
    JS update if changes are made
    save

    UI remove normal
    render editable




At the end of day project eighter should be saved or deleted
*/