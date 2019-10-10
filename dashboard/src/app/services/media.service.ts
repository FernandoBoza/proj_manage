import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import Util from "../Util";

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private api = 'http://localhost:8080/media/';

  constructor(private http: HttpClient) { }

  public uploadMedia(file: File): Observable<any> {
    return this.http.post(this.api, file)
      .pipe(
        tap(_ => _),
        catchError(this.handleError("uploading media err", []))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return Util.handleError(operation, result);
  }
}
