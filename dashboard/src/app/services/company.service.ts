import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private api = 'http://localhost:8080/company/create/user/';

  constructor(private http: HttpClient) { }

  public createCompany(data: any): Observable<any> {
    return this.http.post<any>(`${this.api}${data.creator}`, data)
      .pipe(
        tap(_ => console.log("login")),
        catchError(this.handleError('creating company', []))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
