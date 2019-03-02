import { Component, OnInit } from '@angular/core';
import { CommonData } from '../CommonData';
import { Profile } from './Profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: Profile;

  constructor(private commonData: CommonData) { }

  ngOnInit() {
    this.profile = this.commonData.profile;
  }
}
