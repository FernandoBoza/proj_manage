import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {UtilsService} from "./utils.service";


@Injectable({
  providedIn: 'root'
})

export class UserServiceService {
  public user: User;
  public isLoggedIn: boolean = false;
  public redirectUrl: string;
  private api = 'http://localhost:8080/';

  constructor(
    private http: HttpClient,
    private util: UtilsService,
  ) { }

  public login(data: any): Observable<any> {
    return this.http.post<any>(`${this.api}login`, data)
      .pipe(
        tap(_ => this.isLoggedIn = true),
        catchError(this.handleError('login', []))
      );
  }

  public register(data: any): Observable<any> {
    return this.http.post<any>(`${this.api}register`, data)
      .pipe(
        tap(_ => console.log("login")),
        catchError(this.handleError('register', []))
      );
  }

  public updateUser(user: User):Observable<any> {
    return this.http.put<any>(`${this.api}user/update`, user)
      .pipe(
        tap(_ => {
          this.util.notif_info.title = "Profile Update";
          this.util.notif_info.body = "";
          this.util.show_notif();
          _
        }),
        catchError(this.handleError("updating user", []))
      )
  }

  public updateUserPassword(user: User):Observable<any> {
    return this.http.put<any>(`${this.api}user/update/password`, user)
      .pipe(
        tap(_ => {
          this.util.notif_info.title = "Password updated";
          this.util.notif_info.body = "";
          this.util.show_notif();
          _
        }),
        catchError(this.handleError("updating user", []))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  public mockUser: any[] = [
    {
      name: "Lizzie Parker",
      department: "Development",
      img: "https://randomuser.me/api/portraits/women/6.jpg",
      online: true
    },
    {
      name: "John Doe",
      department: "Development",
      img: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
      online: false
    },
    {
      name: "Jean Parker",
      department: "Development",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      online: false
    },
    {
      name: "Maggie Lopez",
      department: "Development",
      img: "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
      online: false
    },
    {
      name: "Jane Smith",
      department: "Development",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
      online: true
    },
    {
      name: "John Doe",
      department: "Development",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      online: false
    },
    {
      name: "Jean Parker",
      department: "Development",
      img: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
      online: false
    },
    {
      name: "Maggie Lopez",
      department: "Development",
      img: "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
      online: false
    },
  ]
}
