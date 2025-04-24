export class Project {
    static projects = [];

    constructor(title, description){
        this.title = title;
        this.description = description;
        this.todos = [];
        Project.projects.push(this);

        localStorage.projectsList = JSON.stringify(Project.projects);

    }

    

    RemoveItemFromProject(todo){
        for (let x in this.todos){
            if (this.todos[x] === todo){
                console.log(x);
                this.todos.splice(x, 1);
            }
        }
        
    }

    static RemoveProject(project){
        for (let x in projects){
            if (projects === project){
                
                projects.splice(x, 1);
                localStorage.projectsList = JSON.stringify(Project.projects);
            }
        }
    }
    
}



