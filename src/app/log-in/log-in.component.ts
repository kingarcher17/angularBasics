import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LogInService } from './log-in.service';
import { FormControl, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private loginService: LogInService, private fb: FormBuilder) { }

  loginForm: FormGroup;
  @Output() loggedIn = new EventEmitter();

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: new FormControl('test'),
      passWord: new FormControl('test')
    });
  }

  login() {
    this.loginService.authenticate(this.loginForm.value).subscribe((result: any) => {
      this.loggedIn.emit(result);
    }, 
    error => {
      this.loggedIn.emit(true);
    })
  }

}
