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

    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Due Date";

    const dateInput = document.createElement("input");
    dateInput.classList = "Date Input";
    dateInput.type = "date";
    dateInput.required = true;
    const currentDate = new Date().toISOString();
    dateInput.min = currentDate.substring(0, 10);


    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority";

    const priorityInput = document.createElement("select");
    priorityInput.classList = "Priority Input";
    priorityInput.name = "priority";
    priorityInput.required = true;
    const priorityOptions = ["Low", "Medium", "High"];
    
    
    

    for (let x in priorityOptions){
        const option = document.createElement("option");
        option.value = priorityOptions[x];
        option.textContent = priorityOptions[x];
        priorityInput.appendChild(option);
    }

    

    form[0].insertBefore(dateLabel, form[1]);
    form[0].insertBefore(dateInput, form[1]);
    form[0].insertBefore(priorityLabel, form[1]);
    form[0].insertBefore(priorityInput, form[1]);
    return [form[0], form[1]];
}
