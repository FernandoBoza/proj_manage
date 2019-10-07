import { User } from "./User";
import { Task } from "./Task";
export class Project {
   id: string;
   title: string;
   users: Array<User> = [];
   tasks: Array<Task> = [];
   privacy: boolean = false;
}