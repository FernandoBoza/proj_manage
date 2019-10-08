import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {Company} from "../models/Company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  public company: Company;
  private api = 'http://localhost:8080/company/';

  constructor(private http: HttpClient) { }

  public createCompany(data: any): Observable<any> {
    return this.http.post<any>(`${this.api}create/user/${data.creator}`, data)
      .pipe(
        tap(_ => _),
        catchError(this.handleError('creating company', []))
      );
  }

  public getCompanyInfo(com_id: string): Observable<any> {
    return this.http.get(`${this.api}id/${com_id}`)
      .pipe(
        tap(_ => _),
        catchError(this.handleError('Error fetching company', []))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
