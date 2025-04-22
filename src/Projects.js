class Project {
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.todos = []
    }
    
}

function createProject(title, description){
    return new Project(title, description);
}
