import "./styles.css";
import { createProjectUI, createEditableProjectUI } from "./modules/ui";

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
  createEditableProjectUI()
});