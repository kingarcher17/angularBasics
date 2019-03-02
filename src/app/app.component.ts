import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AppService } from './app.service';
import { Profile } from './profile/Profile';
import { CommonData } from './CommonData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private appService: AppService, private commonData: CommonData){}

  userName: string;
  passWord: string;
  loggedIn: any = false;
  logInFailed: any = false;
  profile: Profile;

  ngOnInit() {
    this.userName = "test";
    this.passWord = "test";
  }

  login() {
    this.appService.authenticate(this.userName, this.passWord).subscribe((result: Profile) => {
      if (result != null) {
        this.loggedIn = true;
        this.logInFailed = false;
        this.profile = result;
      } else {
        this.loggedIn = false;
        this.logInFailed = true;
      }     
    }, 
    error => {
      this.loggedIn = false;
      this.logInFailed = true;
    })

    this.commonData.profile = this.profile;
  }
}
