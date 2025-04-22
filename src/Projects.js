class Project {
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.todos = []
    }
    
}

export function createProject(title, description){
    return new Project(title, description);
}

export function AddItemToProject(project, todo){
    project.todos.push(todo);
}

export function RemoveItemFromProject(project, todo){
    for (let x in project.todos){
        if (project.todos[x] === todo){
            project.todos.splice(x, 1);
        }
    }
    project.todos.push(todo);
}