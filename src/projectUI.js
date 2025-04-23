import { createTodoForm } from "./createForms";
import { Todo } from "./Todo";

export function showProjectUI(project){
    const main = document.getElementById("main-content");
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

        todo.textContent = project.todos[x].title;
        todoList.appendChild(todo);
    }

    todoButton.addEventListener("click", () =>{
        const form = createTodoForm();
        main.appendChild(form[0]);
        const inputs = document.getElementsByClassName("Input");
        console.log(inputs);
        
        form[1].addEventListener("click", () =>{
            
            project.todos.push(new Todo(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value));
            showProjectUI(project);
        });
        
    });

    projectUI.appendChild(title);
    projectUI.appendChild(todoButton);
    projectUI.appendChild(todoList);
    main.appendChild(projectUI);
}   

