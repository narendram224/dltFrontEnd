import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://localhost:3000';
  constructor(private http:HttpClient) { }
  get(endpoint: string, optHeaders?: HttpHeaders) {
    return this.http
      .get(this.url + "/" + endpoint, { headers: optHeaders, observe: "response" })
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  post(endpoint: string, body: any, optHeaders?: HttpHeaders) {
    return this.http
      .post(this.url + "/" + endpoint, body, {

        observe: "response"
      })
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  extractData = (response: HttpResponse<any>) => {
    if (response.status === 204) {
      throwError("data not found");
    }
    return response.body || response.status;
  }
   // error handle method
   handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.status) 
    return throwError(errorResponse);
  }
}
