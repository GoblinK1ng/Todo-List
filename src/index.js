import "./style.css";
import { createTodo } from "./Todo";
import { Project } from "./Projects";
import { createProjectForm, createTodoForm } from "./createForms";

const tempTodo = createTodo("Bingus","this thing has a desc", "J 2", "True")

const projectTemp = Project.createProject("Project", "for reasons");
const projectTemp2 = Project.createProject("Project2", "for reasons");
projectTemp.AddItemToProject(tempTodo);
projectTemp.AddItemToProject(tempTodo);
projectTemp.AddItemToProject(tempTodo);


console.log(Project.projects);


function displaySidebar(){
    const sidebar = document.getElementById("sidebar");
    for (let x in Project.projects){
        

        const projectBar = document.createElement("div");
        projectBar.textContent = Project.projects[x].title;
        

        for (let y in Project.projects[x].todos){
            const todo = document.createElement("div");
            todo.classList = "todos";
            todo.textContent = Project.projects[x].todos[y].title;
            
            projectBar.appendChild(todo);
            
        }
        sidebar.appendChild(projectBar);
    }
}


const createProjButton = document.getElementById("createProject");
const createTodoButton = document.getElementById("createTodo");

createProjButton.addEventListener("click", () =>{
    const main = document.getElementById("main-content");
    const form = createProjectForm()
    main.appendChild(form[0]);

    

    form[1].addEventListener("click", (event) =>{
        const inputs = document.getElementsByClassName("Input");
        
        Project.createProject(inputs[0].value, inputs[1].value);

        main.innerHTML = "";
        console.log(Project.projects);
    });
});

createTodoButton.addEventListener("click", () =>{
    const main = document.getElementById("main-content");
    main.appendChild(createTodoForm());
});