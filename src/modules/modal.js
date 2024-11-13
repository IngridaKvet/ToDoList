import discardBtnIcon from "../img/xIcon.svg"

function createModalOverlay(projectToDelete){
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modalOverlay';
  const modalCard = document.createElement('div');
  modalCard.className = 'modalCard';
  const closeButton = document.createElement('button');
  closeButton.setAttribute("id","closeBtn")
  closeButton.classList.add("discardBtn");
  const closeIcon = document.createElement('img');
  closeIcon.src = discardBtnIcon;
  closeButton.appendChild(closeIcon);
  const title = document.createElement('h2');
  title.textContent = 'Are you sure you want to discard this project?';
  const description = document.createElement('p');
  description.textContent = 'Once project is deleted it cannot be recovered.';
  const btnContainer = document.createElement('div');
  btnContainer.className = 'btnContainer';
  const cancelButton = document.createElement('button');
  cancelButton.setAttribute("id", "cancelBtn")
  cancelButton.className = 'smallBtn redBtn';
  cancelButton.classList.add("discardBtn");
  cancelButton.textContent = 'Cancel';
  const proceedButton = document.createElement('button');
  proceedButton.setAttribute("id","proceedBtn")
  proceedButton.className = 'smallBtn greyBtn';
  proceedButton.textContent = 'Proceed';
  btnContainer.appendChild(cancelButton);
  btnContainer.appendChild(proceedButton);
  modalCard.appendChild(closeButton);
  modalCard.appendChild(title);
  modalCard.appendChild(description);
  modalCard.appendChild(btnContainer);
  modalOverlay.appendChild(modalCard);
  document.body.appendChild(modalOverlay);

  addListeners(projectToDelete);
}

function addListeners(projectToDelete){
  document.getElementById("closeBtn").addEventListener('click', () => closeModal());
  document.getElementById("cancelBtn").addEventListener('click', () => closeModal());
  document.getElementById("proceedBtn").addEventListener('click', () => {
    projectToDelete.remove();
    closeModal();
  });

  const modalOverlay = document.querySelector('.modalOverlay');
  if(modalOverlay){
      modalOverlay.addEventListener('click',(event) => handleOutsideClick(event));
  }
}

function handleOutsideClick(event){
  const modalCard = document.querySelector('.modalCard')
  const modalOverlay = document.querySelector('.modalOverlay');
  if(modalOverlay){
    if(!modalCard.contains(event.target)){
      closeModal();
    }
  }
}

function closeModal(){
  const modalOverlay = document.querySelector('.modalOverlay');
  modalOverlay.remove();
}

export {createModalOverlay}