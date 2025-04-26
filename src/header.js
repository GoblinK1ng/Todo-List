import { displaySidebar } from "./sidebar";
import { Project } from "./Projects";
import { createProjectForm } from "./createForms";

export function projButton(){
    
    const createProjButton = document.getElementById("createProject");
    createProjButton.addEventListener("click", () =>{
        const main = document.getElementById("main-content");
        const form = createProjectForm()
        main.appendChild(form[0]);
    
        
    
        form[1].addEventListener("click", () =>{
            if (form[0].checkValidity()){
                const inputs = document.getElementsByClassName("Input");
            
                const project = new Project(inputs[0].value, inputs[1].value);
                Project.addProjectoList(project);
        
                main.innerHTML = "";
                console.log(Project.projects);
        
                displaySidebar();
            }
            
        });
    });
}
