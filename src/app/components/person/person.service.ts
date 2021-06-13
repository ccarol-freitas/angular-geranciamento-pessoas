import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Person } from './person.model';
import { EMPTY, Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";


@Injectable({
    providedIn: 'root'
})

export class PersonService {

    // URL da API
    apiUrl = '/people';

    constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({ 'Accept': '*/*', 'Content-Type': 'application/json;', 'Access-Control-Allow-Origin': '*' })
    }


    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, 'X', {
            duration: 3000,
            horizontalPosition: "center",
            verticalPosition: "top",
            panelClass: isError ? ['error'] : ['sucess']
        })
    }

    error(e: any): Observable<any> {
        this.showMessage("IIIIIh DEU RUIM", true)
        return EMPTY
    }


    // Registro de pessoas POST
    create(person: Person): Observable<Person> {
        return this.http.post<Person>(this.apiUrl, person, this.httpOptions).pipe(
            map((obj) => obj),
            catchError((e) => this.error(e))
        );
    }

    // Listagem de pessoas GET
    read(): Observable<Person[]> {
        return this.http.get<Person[]>(this.apiUrl, this.httpOptions).pipe(
            map((obj) => obj),
            catchError((e) => this.error(e))
        );
    }

    // Lendo as pessoas por ID
    readById(id: string): Observable<Person> {
        const url = `${this.apiUrl}/${id}`
        return this.http.get<Person>(url, this.httpOptions).pipe(
            map((obj) => obj),
            catchError((e) => this.error(e))
        );
    }

    // Atualização de pessoas PATCH/PUT
    update(person: Person): Observable<Person> {
        const url = `${this.apiUrl}/${person.id}`
        return this.http.patch<Person>(url, person, this.httpOptions,).pipe(
            map((obj) => obj),
            catchError((e) => this.error(e))
        );
    }

    // Exclusão de pessoas DELETE
    delete(id: string): Observable<Person> {
        const url = `${this.apiUrl}/${id}`
        return this.http.delete<Person>(url, this.httpOptions,).pipe(
            map((obj) => obj),
            catchError((e) => this.error(e))
        );
    }

    // Manipulação de erros 
    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Erro ocorreu no lado do client
            errorMessage = error.error.message;
        } else {
            // Erro ocorreu no lado do servidor
            errorMessage = `Cod do erro: ${error.status}, ` + `mensagem: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    };
}


