export function createProjectForm(){
    const main = document.getElementById("main-content");
    main.innerHTML = "";
    const form = document.createElement("form");
    
    
    const titleInput = document.createElement("input");
    titleInput.classList = "Title Input"
    const descriptionInput = document.createElement("textarea");
    descriptionInput.classList = "Description Input";
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Project Name";
    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description";
    
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);
    form.appendChild(submitButton);
    main.appendChild(form);
}