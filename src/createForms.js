export function createProjectForm(name = "", description = ""){
    const main = document.getElementById("main-content");
    main.innerHTML = "";
    const form = document.createElement("form");
    console.log(name);
    
    const titleInput = document.createElement("input");
    titleInput.classList = "Name Input"
    titleInput.value = name;
    titleInput.required = true;

    const descriptionInput = document.createElement("textarea");
    descriptionInput.classList = "Description Input";
    

    descriptionInput.textContent = description;
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.id = "submit";
    submitButton.textContent = "Submit";

    submitButton.addEventListener("click", (event) =>{
        event.preventDefault();
        
    });

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Name";
    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description";
    
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);
    form.appendChild(submitButton);
    return [form, submitButton];
}

export function createTodoForm(){
    const form = createProjectForm();

    const dateInput = document.createElement("input");
    dateInput.classList = "Date Input";
    dateInput.type = "date";
    dateInput.required = true;

    const priorityInput = document.createElement("input");
    priorityInput.classList = "Priority Input";
    priorityInput.setAttribute('list', 'priority');
    priorityInput.type = "text";
    priorityInput.required = true;

    const priorityOptions = ["Low", "Medium", "High"];
    const priorityList = document.createElement("datalist");
    priorityList.id = "priority";
    
    

    for (let x in priorityOptions){
        const option = document.createElement("option");
        option.value = priorityOptions[x];
        priorityList.appendChild(option);
    }

    priorityInput.appendChild(priorityList);

    
    form[0].insertBefore(dateInput, form[1]);
    form[0].insertBefore(priorityInput, form[1]);
    return [form[0], form[1]];
}
