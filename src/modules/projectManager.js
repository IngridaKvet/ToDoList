let projects = [];

let generalProject = createProject('General', "0", "#555555");
saveProject(generalProject);

function createProject(projectTitle,taskNumber,projectColor){
  return{
    projectTitle: projectTitle,
    taskNumber: taskNumber,
    projectColor: projectColor,   
    id: Date.now
  }
}

function editProject(project, newProjectName, newProjectColor){
  project.projectTitle = newProjectName;
  project.projectColor = newProjectColor;
}

function discardProject(projectId) {
  projects = projects.filter(project => project.id !== projectId);
  localStorage.setItem('projects', JSON.stringify(projects));
}

function discardLastProject(){
    projects = projects.slice(0,-1);
}

function saveProject(project){
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
}


export {createProject, editProject, discardProject, saveProject, discardLastProject}