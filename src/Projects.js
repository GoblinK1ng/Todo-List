export class Project {
    static projects = [];

    constructor(title, description){
        this.title = title;
        this.description = description;
        this.todos = [];

        localStorage.projectsList = JSON.stringify(Project.projects);

    }

    EditProject(title = this.title, description = this.description){
        this.title = title;
        this.description = description;
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

    static addProjectoList(project){
        Project.projects.push(project);
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



