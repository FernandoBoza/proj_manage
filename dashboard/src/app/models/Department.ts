import { User } from "./User";
import { Project } from "./Project";
export class Department {
   id: string;
   name: string;
   creator: string;
   users: Array<User> = [];
   projects: Array<Project> = [];
   privacy: boolean = false;
}