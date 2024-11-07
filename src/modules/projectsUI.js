import editBtnIcon from "../img/editBtn.svg"
import deleteBtnIcon from "../img/dltBtn.svg"
import saveBtnIcon from "../img/saveIcon.svg"
import discardBtnIcon from "../img/xIcon.svg"
import { createModalOverlay } from "./modal.js";

function createEditableProjectUI(){
  const projectsContainer = document.querySelector('.projectsContainer');
  const projectCard = document.createElement("article");
  projectCard.classList.add("projectCard", "editableProjectCard");
  const colorIndicator = document.createElement("div");
  colorIndicator.classList.add("projectColorIndicator");
  projectCard.appendChild(colorIndicator);
  const textContainer = document.createElement("div");
  textContainer.classList.add("projectTextContainer");
  const heading = document.createElement("h2");
  heading.setAttribute("id", "editableHeading")
  heading.contentEditable = "true"; 
  heading.textContent = "Default project Name";   
  textContainer.appendChild(heading);
  const paragraph = document.createElement("p");
  paragraph.textContent = "0 tasks";
  textContainer.appendChild(paragraph);
  projectCard.appendChild(textContainer);
  const editBtnContainer = document.createElement("div");
  editBtnContainer.classList.add("editBtnContainer");
  const discardBtn = document.createElement("button");
  discardBtn.setAttribute("id", "discardBtn")
  discardBtn.classList.add("discardBtn");
  discardBtn.classList.add("icon-btn");
  const discardIcon = document.createElement("img");
  discardIcon.src = discardBtnIcon;
  discardIcon.alt = " Icon";
  discardIcon.classList.add("icon");
  discardBtn.appendChild(discardIcon);
  editBtnContainer.appendChild(discardBtn);
  const saveBtn = document.createElement("button");
  saveBtn.classList.add("icon-btn");
  saveBtn.setAttribute("id", "saveBtn")
  const saveIcon = document.createElement("img");
  saveIcon.src = saveBtnIcon;
  saveIcon.alt = "Save Icon";
  saveIcon.classList.add("icon");
  saveBtn.appendChild(saveIcon);
  editBtnContainer.appendChild(saveBtn);
  projectCard.appendChild(editBtnContainer);
  projectsContainer.appendChild(projectCard);

  // instead of linebreak on Enter allow to input Project name.
  heading.addEventListener('keydown', (event) => {
    if(event.key === "Enter"){
      event.preventDefault();
      heading.blur();
    }
  })
  
  // save project icon is pressed: remove editable mode
  document.getElementById("saveBtn").addEventListener('click', () => {
    replaceEditableProjectUI();
  });

  // discard project icon is pressed, open confirmation modal. Discard or keep.
  document.getElementById("discardBtn").addEventListener('click', () => { 
    createModalOverlay();
  });

    
   // const discardBtns = document.querySelectorAll('.discardBtn');
    //discardBtns.forEach(btn => {
     // btn.addEventListener('click', () => {

        //console.log("discard clicked")
        /*
        if (!document.querySelector('.modalOverlay')) {
        createModalOverlay();
        }*/
     // });
    //});

/*
document.getElementById("discardBtn").addEventListener('click', () => {
  //createProjectUI("Career", 3, "#FFFFFF");
  createModalOverlay();

});
*/





}

function deleteEditableProjectUI(){
  const editableProjectCard = document.querySelector('.editableProjectCard');
  editableProjectCard.remove();
}


function replaceEditableProjectUI(){
  const editableProjectCard = document.querySelector('.editableProjectCard');
  const editableHeading = document.getElementById("editableHeading").textContent; // TAKE VARIABLE
  editableProjectCard.remove();
  createProjectUI(editableHeading,"0");

}

// create project UI
function createProjectUI(projectName, taskNumber, indicatorColor){
  const projectsContainer = document.querySelector('.projectsContainer');
  const article = document.createElement('article');
  article.classList.add('projectCard');
  const projectColorIndicator = document.createElement('div');
  projectColorIndicator.classList.add('projectColorIndicator');
  projectColorIndicator.style.backgroundColor = indicatorColor;
  const projectTextContainer = document.createElement('div');
  projectTextContainer.classList.add('projectTextContainer');
  const h2 = document.createElement('h2');
  h2.textContent = projectName;
  const p = document.createElement('p');
  p.textContent = taskNumber + ' tasks';
  projectTextContainer.appendChild(h2);
  projectTextContainer.appendChild(p);
  const editBtnContainer = document.createElement('div');
  editBtnContainer.classList.add('editBtnContainer');
  const editButton = document.createElement('button');
  editButton.classList.add('icon-btn');
  const editIcon = document.createElement('img');
  editIcon.src = editBtnIcon;
  editIcon.alt = 'Edit';
  editIcon.classList.add('icon');
  editButton.appendChild(editIcon);
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('icon-btn');
  const deleteIcon = document.createElement('img');
  deleteIcon.src = deleteBtnIcon;
  deleteIcon.alt = 'Delete';
  deleteIcon.classList.add('icon');
  deleteButton.appendChild(deleteIcon);
  editBtnContainer.appendChild(editButton);
  editBtnContainer.appendChild(deleteButton);
  article.appendChild(projectColorIndicator);
  article.appendChild(projectTextContainer);
  article.appendChild(editBtnContainer);

  projectsContainer.appendChild(article);
}


  





// delete project UI valid for discard project in editable mode and delete project.


// edit project UI (change name and indicator color)

  //createProjectUI(projectName,taskNumber, indicatorColor);

export {createEditableProjectUI, createProjectUI, replaceEditableProjectUI, deleteEditableProjectUI}

