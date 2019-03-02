import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private appService: AppService){}

  userName: string;
  passWord: string;
  loggedIn: any = false;
  logInFailed: any = false;

  ngOnInit() {
    this.userName = "test";
    this.passWord = "test";
  }

  login() {
    this.appService.authenticate(this.userName, this.passWord).subscribe((result: any) => {
      this.loggedIn = true;
      this.logInFailed = false;
    }, 
    error => {
      this.loggedIn = false;
      this.logInFailed = true;
    })
  }

}
