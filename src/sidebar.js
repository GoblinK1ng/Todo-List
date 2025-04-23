import { Project } from "./Projects";
import { createProjectForm } from "./createForms";
import edit from "./imgs/edit.svg";
import { showProjectUI } from "./projectUI";

export function displaySidebar(){
    const sidebar = document.getElementById("projects-section");
    sidebar.innerHTML = "";
    for (let x in Project.projects){
        

        const projectBar = document.createElement("div");
        projectBar.classList = "project-bar";
        const projectName = document.createElement("button");
        projectName.classList = "open-project";
        const projectEdit = document.createElement("input");
        projectEdit.classList = "edit-project";
        projectEdit.setAttribute("type", "image");
        projectEdit.src = edit;
        projectName.textContent = Project.projects[x].title;

        projectName.addEventListener("click", () =>{
            showProjectUI(Project.projects[x]);
        })

        projectEdit.addEventListener("click", ()=>{
            console.log(Project.projects[x].title);
            const main = document.getElementById("main-content");
            main.appendChild(createProjectForm(Project.projects[x].title, Project.projects[x].description)[0]);
        });
        projectBar.appendChild(projectName);
        projectBar.appendChild(projectEdit);

        

        /*for (let y in Project.projects[x].todos){
            const todo = document.createElement("div");
            todo.classList = "todos";
            todo.textContent = Project.projects[x].todos[y].title;
            
            projectBar.appendChild(todo);
            
        }*/
        sidebar.appendChild(projectBar);
    }
}