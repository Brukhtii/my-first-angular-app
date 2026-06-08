import { Component, computed } from "@angular/core";
import { ProfilePhoto } from "../profile-photo/profile-photo";
import {signal} from '@angular/core';


@Component({
    selector: 'user-profile',
    imports: [ProfilePhoto],
    template: `
        <div>Profile for {{ userName() }}</div>
        <profile-photo />
    `
})

export class UserProfile {
  userName = signal('pro_programer');


  constructor() {
    this.userName.set('test1111');
  }

};