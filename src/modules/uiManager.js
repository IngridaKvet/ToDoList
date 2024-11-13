import editBtnIcon from "../img/editBtn.svg"
import deleteBtnIcon from "../img/dltBtn.svg"
import saveBtnIcon from "../img/saveIcon.svg"
import discardBtnIcon from "../img/xIcon.svg"
import { addListenersEditableProjectCard, addListenersProjectCard } from "./eventManager";

function createEditableProjectCard(inputProjectName, inputTaskNumber, inputColorValue){
  const headingName = inputProjectName || "Default project";
  const taskNumber = inputTaskNumber || "0"
  const colorValue = inputColorValue || "#555555"

  const projectsContainer = document.querySelector('.projectsContainer');
  const projectCard = document.createElement("article");
  projectCard.classList.add("projectCard", "editableProjectCard");
  const colorIndicator = document.createElement("input");
  colorIndicator.classList.add("projectColorIndicator");
  colorIndicator.setAttribute('type', 'color');
  colorIndicator.setAttribute('id', 'colorPicker');
  colorIndicator.setAttribute('value', colorValue)
  projectCard.appendChild(colorIndicator);
  const textContainer = document.createElement("div");
  textContainer.classList.add("projectTextContainer");
  const heading = document.createElement("h2");
  heading.setAttribute("id", "editableHeading")
  heading.contentEditable = "true"; 
  heading.textContent = headingName;  
  textContainer.appendChild(heading);
  const paragraph = document.createElement("p");
  paragraph.textContent = taskNumber + " tasks";
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
  
  addListenersEditableProjectCard()
}

function deleteEditableProjectCard(){
  const editableProjectCard = document.querySelector('.editableProjectCard');
  editableProjectCard.remove();
}

function replaceEditableProjectCard(){
  const editableProjectCard = document.querySelector('.editableProjectCard');
  const editableHeading = document.getElementById("editableHeading").textContent; // TAKE VARIABLE
  const projectColor = document.getElementById("colorPicker").value;
  editableProjectCard.remove();
  createProjectCard(editableHeading,"0", projectColor);
}

function createProjectCard(projectName, taskNumber, indicatorColor){
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
  editButton.setAttribute('id', 'editProjectBtn')
  editButton.classList.add('icon-btn');
  editButton.classList.add('editProjectBtn');
  const editIcon = document.createElement('img');
  editIcon.src = editBtnIcon;
  editIcon.alt = 'Edit';
  editIcon.classList.add('icon');
  editButton.appendChild(editIcon);
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('id', 'deleteProjectBtn')
  deleteButton.classList.add('icon-btn');
  deleteButton.classList.add('deleteProjectBtn');
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

  addListenersProjectCard();
}

export {createEditableProjectCard, deleteEditableProjectCard, replaceEditableProjectCard, createProjectCard}
