import editBtnIcon from "../img/editBtn.svg"
import deleteBtnIcon from "../img/dltBtn.svg"
import saveBtnIcon from "../img/saveIcon.svg"
import discardBtnIcon from "../img/xIcon.svg"

// create editable project UI
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
    heading.contentEditable = "true"; 
    heading.textContent = "General";   
    textContainer.appendChild(heading);
    const paragraph = document.createElement("p");
    paragraph.textContent = "0 tasks";
    textContainer.appendChild(paragraph);
    projectCard.appendChild(textContainer);
    const editBtnContainer = document.createElement("div");
    editBtnContainer.classList.add("editBtnContainer");
    const editBtn = document.createElement("button");
    editBtn.classList.add("icon-btn");
    const editIcon = document.createElement("img");
    editIcon.src = discardBtnIcon;
    editIcon.alt = " Icon";
    editIcon.classList.add("icon");
    editBtn.appendChild(editIcon);
    editBtnContainer.appendChild(editBtn);
    const saveBtn = document.createElement("button");
    saveBtn.classList.add("icon-btn");
    const saveIcon = document.createElement("img");
    saveIcon.src = saveBtnIcon;
    saveIcon.alt = "Save Icon";
    saveIcon.classList.add("icon");
    saveBtn.appendChild(saveIcon);
    editBtnContainer.appendChild(saveBtn);
    projectCard.appendChild(editBtnContainer);

    projectsContainer.appendChild(projectCard);
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

    projectsContainer.appendChild(article) // Changes text color to blue
}

// Show delete confirmation modal




// delete project UI valid for discard project in editable mode and delete project.


// edit project UI (change name and indicator color)

  //createProjectUI(projectName,taskNumber, indicatorColor);

export {createEditableProjectUI, createProjectUI}

