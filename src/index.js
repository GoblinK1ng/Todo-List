import "./style.css";
//import { Todo } from "./Todo";
import { Project } from "./Projects";
import { Todo } from "./Todo";
//import { createProjectForm, createTodoForm } from "./createForms";
import { displaySidebar } from "./sidebar";
import { projButton } from "./header";



if (JSON.parse(localStorage.getItem("projectsList")) !== null){
    Project.projects = JSON.parse(localStorage.getItem("projectsList"));
    for (let x in Project.projects){
        for (let y in Project.projects[x].todos)
        Project.projects[x].todos[y].shown = false;
    }
}




displaySidebar();

projButton();


