import "./style.css";
import { createTodo } from "./Todo";
import { Project } from "./Projects";
import { createProjectForm, createTodoForm } from "./createForms";
import { displaySidebar } from "./sidebar";

const tempTodo = createTodo("Bingus","this thing has a desc", "J 2", "True")

new Project("Project", "for reasons");
new Project("Project2", "for reasons");
Project.projects[0].AddItemToProject(tempTodo);
Project.projects[0].AddItemToProject(tempTodo);
Project.projects[0].AddItemToProject(tempTodo);


console.log(Project.projects);

displaySidebar();

const createProjButton = document.getElementById("createProject");
const createTodoButton = document.getElementById("createTodo");

createProjButton.addEventListener("click", () =>{
    const main = document.getElementById("main-content");
    const form = createProjectForm()
    main.appendChild(form[0]);

    

    form[1].addEventListener("click", (event) =>{
        const inputs = document.getElementsByClassName("Input");
        
        new Project(inputs[0].value, inputs[1].value);

        main.innerHTML = "";
        console.log(Project.projects);

        displaySidebar();
    });
});

createTodoButton.addEventListener("click", () =>{
    const main = document.getElementById("main-content");
    main.appendChild(createTodoForm());
});