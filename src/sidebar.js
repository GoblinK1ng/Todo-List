import { Project } from "./Projects";
import { createProjectForm } from "./createForms";
import edit from "./imgs/edit.svg";
import trash from "./imgs/trash-2.svg";
import { showProjectUI } from "./projectUI";



const main = document.getElementById("main-content");

export function displaySidebar(){
    const sidebar = document.getElementById("projects-section");
    sidebar.innerHTML = "";
    for (let x in Project.projects){
        

        const projectBar = document.createElement("div");
        projectBar.classList = "project-bar";
        const projectDelete = document.createElement("input");
        projectDelete.id = "deleteProject";
        projectDelete.setAttribute("type", "image");
        projectDelete.src = trash;
        const projectName = document.createElement("button");
        projectName.classList = "open-project";
        const projectEdit = document.createElement("input");
        projectEdit.classList = "edit-project";
        projectEdit.setAttribute("type", "image");
        projectEdit.src = edit;
        projectName.textContent = Project.projects[x].title;

        projectDelete.addEventListener("click", () =>{
            Project.RemoveProject(Project.projects[x]);
            main.innerHTML = "";
        })
        
        projectName.addEventListener("click", () =>{
            showProjectUI(Project.projects[x]);
        })

        projectEdit.addEventListener("click", ()=>{
            changeProjectButton(x);
        });
        projectBar.appendChild(projectDelete);
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

function changeProjectButton(x){
    const form = createProjectForm(Project.projects[x].title, Project.projects[x].description);
    main.appendChild(form[0]);
    form[1].addEventListener("click", () =>{
        const inputs = document.getElementsByClassName("Input");
        console.log(Project.projects[x]);
        
        Project.EditProject(inputs[0].value, inputs[1].value, Project.projects[x]);

        displaySidebar();
        main.innerHTML = "";
    });
}