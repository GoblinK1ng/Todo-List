class Todo {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    set title(value){
        this._title = value;
    }
    set description(value){
        this._description = value;
    }
    set dueDate(value){
        this._dueDate = value;
    }
    set priority(value){
        this._priority = value;
    }
    
}

export function createTodo(title, description, dueDate, priority){
    return new Todo(title, description, dueDate, priority);
}
