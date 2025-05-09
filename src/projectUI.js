import { createTodoForm } from "./createForms";
import { Todo } from "./Todo";
import { Project } from "./Projects";
import square from "./imgs/square.svg";
import squareX from "./imgs/x-square.svg";

const main = document.getElementById("main-content");

export function showProjectUI(project){
    
    main.innerHTML = "";
    const projectUI = document.createElement("div");
    projectUI.id = "projectUI";
    
    
    const title = document.createElement("h2");
    title.textContent = project.title;

    const todoButton = document.createElement("button");
    todoButton.textContent = "Create Todo";
    todoButton.id = "todoButton";
    todoButton.addEventListener("click", () =>{
        createTodo(project);
    });


    const todoList = document.createElement("ul");

    for (let x in project.todos){
        const todo = document.createElement("li");
        todo.classList = "todo"

        const todoOpen = document.createElement("button");
        todoOpen.id = "todoOpen";
        todoOpen.classList = "todoOpen";
        todoOpen.textContent = project.todos[x].title;
        todoOpen.addEventListener("click", () =>{
            showInfo(project, todoInfo, x);
        })

        const todoDate = document.createElement("p");
        todoDate.id = "todoDate";
        todoDate.textContent = project.todos[x].dueDate;

        const todoInfo = document.createElement("div");
        todoInfo.id = "todoInfo";

        const todoComplete = document.createElement("input");
        todoComplete.setAttribute("type", "image");
        todoComplete.src = checkComplete(project.todos[x]);
        todoComplete.id = "todoComplete";
        
        todoComplete.addEventListener("click", () =>{
            complete(project.todos[x], todoComplete);
            
        })
        
        todo.appendChild(todoComplete);
        todo.appendChild(todoOpen);
        todo.appendChild(todoDate);
        todo.appendChild(todoInfo);
        todoList.appendChild(todo);
    }



    projectUI.appendChild(title);
    projectUI.appendChild(todoButton);
    projectUI.appendChild(todoList);
    main.appendChild(projectUI);
}   

function showInfo(project, infoElement, x){
    if (!project.todos[x].shown){
        const todoDesc = document.createElement("p");
        todoDesc.id = "todoDesc"
        todoDesc.textContent = project.todos[x].description;
        infoElement.appendChild(todoDesc);

        const todoPriority = document.createElement("p");
        todoPriority.id = "todoPriority";
        todoPriority.textContent = "Priority: "+project.todos[x].priority;
        infoElement.appendChild(todoPriority);

        const todoDelete = document.createElement("button");
        todoDelete.id = "todoDelete";
        todoDelete.textContent = "Delete Todo";
        todoDelete.addEventListener("click", () =>{
            Project.RemoveItemFromProject(project.todos[x], project);
            showProjectUI(project);
        });
        infoElement.appendChild(todoDelete);

        project.todos[x].shown = true;
        
    }
    else{
        infoElement.innerHTML = "";
        project.todos[x].shown = false;
    }
}

function createTodo(project){
    const form = createTodoForm();
    main.appendChild(form[0]);
    const inputs = document.getElementsByClassName("Input");
    console.log(inputs);
    
    form[1].addEventListener("click", () =>{
        if (form[0].checkValidity()){
            project.todos.push(new Todo(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value));
            localStorage.projectsList = JSON.stringify(Project.projects);
            showProjectUI(project);

        }
        
        
    });
}

function complete(todo, formTodo){
    todo.complete = !todo.complete;
    if (todo.complete) formTodo.src = squareX;
    else formTodo.src = square;
    localStorage.projectsList = JSON.stringify(Project.projects);
}

function checkComplete(todo){
    if (todo.complete) return squareX;
    else return square;
    
}