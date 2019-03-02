import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class AppService {

    constructor(private httpClient: HttpClient){};

    authenticate(userName: string, passWord: string): Observable<boolean> {
        //return this.httpClient.get<any>("");
        let valid = userName=="test" && passWord=="test";
        return of(valid);
    }

}