import "./style.css";
import { createTodo } from "./Todo";
import { createProject, AddItemToProject } from "./Projects";

const tempTodo = createTodo("Bingus","this thing has a desc", "J 2", "True")

console.log(tempTodo);

const projectTemp = createProject("Project", "for reasons");

console.log(projectTemp);

AddItemToProject(projectTemp, tempTodo);

console.log(projectTemp);