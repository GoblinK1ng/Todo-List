import "./style.css";
//import { Todo } from "./Todo";
import { Project } from "./Projects";
//import { createProjectForm, createTodoForm } from "./createForms";
import { displaySidebar } from "./sidebar";
import { projButton } from "./header";



if (JSON.parse(localStorage.getItem("projectsList")) !== null){
    Project.projects = JSON.parse(localStorage.getItem("projectsList"));
}
displaySidebar();

projButton();


