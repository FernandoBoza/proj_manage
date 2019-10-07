import { User } from "./User";
export class Comment {
   id: string;
   user: User;
   postDate: Date;
   message: string;
}