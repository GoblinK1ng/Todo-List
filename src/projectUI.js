

export function showProjectUI(project){
    const main = document.getElementById("main-content");
    main.innerHTML = "";
    const projectUI = document.createElement("div");
    projectUI.id = "projectUI";
    
    
    const title = document.createElement("h2");
    title.textContent = project.title;
    const todoList = document.createElement("ul");

    for (let x in project.todos){
        const todo = document.createElement("li");

        todo.textContent = project.todos[x].title;
        todoList.appendChild(todo);
    }

    projectUI.appendChild(title);
    projectUI.appendChild(todoList);
    main.appendChild(projectUI);
}   