import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class LogInService {

    constructor(private httpClient: HttpClient){};

    authenticate(loginForm: any): Observable<boolean> {
        //return this.httpClient.get<any>("");
        let valid = loginForm.userName=="test" && loginForm.passWord=="test";
        return of(valid);
    }


}