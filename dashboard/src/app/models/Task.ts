import { Comment } from "./Comment";
export class Task {
   id: string;
   name: string;
   status: string;
   creator: string;
   assignee: string;
   dueDate: Date;
   description: string;
   comments: Array<Comment> = [];
}
