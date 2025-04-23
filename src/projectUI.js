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
        todo.classList = "todo"
        const todoOpen = document.createElement("button");
        todoOpen.id = "todoOpen";
        const todoDate = document.createElement("p");
        todoDate.id = "todoDate";
        const todoInfo = document.createElement("div");
        todoInfo.id = "todoInfo";

        

        todoOpen.addEventListener("click", () =>{
            if (!project.todos[x].shown){
                const todoDesc = document.createElement("p");
                todoDesc.textContent = project.todos[x].description;
                todoInfo.appendChild(todoDesc);

                const todoPriority = document.createElement("p");
                todoPriority.textContent = "Priority: "+project.todos[x].priority;
                todoInfo.appendChild(todoPriority);

                project.todos[x].shown = true;

                
                
            }
            else{
                todoInfo.innerHTML = "";
                project.todos[x].shown = false;
            }
        })
        
        todoDate.textContent = project.todos[x].dueDate;
        todoOpen.classList = "todoOpen";
        todoOpen.textContent = project.todos[x].title;
        todo.appendChild(todoOpen);
        todo.appendChild(todoDate);
        todo.appendChild(todoInfo);
        todoList.appendChild(todo);
    }



    todoButton.addEventListener("click", () =>{
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
        
    });

    projectUI.appendChild(title);
    projectUI.appendChild(todoButton);
    projectUI.appendChild(todoList);
    main.appendChild(projectUI);
}   

