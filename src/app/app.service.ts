import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Profile } from './profile/Profile';

@Injectable()
export class AppService {

    constructor(private httpClient: HttpClient){};

    authenticate(userName: string, passWord: string): Observable<Profile> {
        //return this.httpClient.get<any>("");
        let valid = userName=="test" && passWord=="test";
        if (valid) {
            let profile = new Profile();
            profile.fname = "Leonard";
            profile.lname = "Cooper"
            profile.residence = "Australia";
            profile.nationality = "Philippines";
            profile.dob = "August 29, 2002";
            profile.status = "Married";
            profile.gender = "Male";
            return of (profile);
        } else {
            return of(null);
        }
    }

}