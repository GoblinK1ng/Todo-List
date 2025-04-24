import { createTodoForm } from "./createForms";
import { Todo } from "./Todo";

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

        

        
        
        todo.appendChild(todoOpen);
        todo.appendChild(todoDate);
        todo.appendChild(todoInfo);
        todoList.appendChild(todo);
    }



    todoButton.addEventListener("click", () =>{
        createTodo(project);
        
    });



    projectUI.appendChild(title);
    projectUI.appendChild(todoButton);
    projectUI.appendChild(todoList);
    main.appendChild(projectUI);
}   

function showInfo(project, infoElement, x){
    if (!project.todos[x].shown){
        const todoDesc = document.createElement("p");
        todoDesc.textContent = project.todos[x].description;
        infoElement.appendChild(todoDesc);

        const todoPriority = document.createElement("p");
        todoPriority.textContent = "Priority: "+project.todos[x].priority;
        infoElement.appendChild(todoPriority);

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
            showProjectUI(project);
        }
        
        
    });
}