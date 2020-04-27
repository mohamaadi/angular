import { Injectable } from '@angular/core';
import { ICar } from './car';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class MyService{
    private url= 'api/cars/cars.json';
    constructor(private http:HttpClient){

    }
    getCars(): Observable<ICar[]> {
        return this.http.get<ICar[]>(this.url).pipe(
            tap(data => console.log('All data:' + JSON.stringify(data))),
            catchError(this.handleError())
        );
        
    }
   private handleError(err:HttpErrorResponse) {
        let errorMessag = '';
        if (err.error instanceof ErrorEvent){
                errorMessag = 'an error occoured: ${err.error.message}';
        }
        else{
            errorMessag= 'server error : ${err.status} ${err.message}';
        }
        console.error(errorMessag);
        return throwError(errorMessag);
    };
    
    
}