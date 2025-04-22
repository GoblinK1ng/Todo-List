import "./style.css";
import { createTodo } from "./Todo";
import { Project } from "./Projects";

const tempTodo = createTodo("Bingus","this thing has a desc", "J 2", "True")

const projectTemp = Project.createProject("Project", "for reasons");
const projectTemp2 = Project.createProject("Project2", "for reasons");
projectTemp.AddItemToProject(tempTodo);

console.log(Project.projects);


/*function displaySidebar(){
    const sidebar = document.getElementById("sidebar");
    for (let x in )
}*/