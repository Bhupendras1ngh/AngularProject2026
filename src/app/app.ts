import { Component, signal, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { ProfileComponent } from './profile/profile.component';
// import {signal} from 'rxjs'
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, ProfileComponent, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor() {
    effect(() => {
      // console.log(this.userName())
      if (this.count == 2) {
        this.signalDisplay = true;
        setTimeout(() => {
          this.signalDisplay = false;
        }, 2000);
      } else this.signalDisplay = false;
    });
  }
  protected readonly title = signal('prelims2026');
  count = 0;
  userName = signal(0);
  name = '';
  displayname = '';
  email = '';
  display = false;
  toggleDiv = true;
  signalDisplay = false;
  countSignal = signal(10);
  users = [
    { name: 'Sonu', age: 24, email: 'sonu@gmail.com' },
    { name: 'golu', age: 26, email: 'golu@gmail.com' },
    { name: 'raghav', age: 26, email: 'golu@gmail.com' },
    { name: 'vipul', age: 26, email: 'vipul@gmail.com' },
    { name: 'banti', age: 26, email: 'banti@gmail.com' },
    { name: 'birju', age: 26, email: 'birju@gmail.com' },
  ];
  // showName ="";
  updateSignal() {
    this.userName.set((this.count += 1));
    // this.signalDisplay =! this.signalDisplay;
    // console.log(this.signalDisplay())
  }
  handleCount(val: string) {
    if (val == 'minus') {
      if (this.count >= 1) this.count -= 1;
    } else if (val == 'add') this.count += 1;
    else if (val == 'reset') this.count = 0;
  }
  handleEvent(event: any) {
    console.log('function called ', event);
  }
  getName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
    console.log(name);
  }
  displayName() {
    this.displayname = this.name;
    console.log(this.displayname);
  }
  setName() {
    this.name = 'Ram';
    this.displayname = this.name;
  }
  getEmail(event: string) {
    console.log('get Email', event);
    this.email = event;
  }
  hideDiv(event: string) {
    if (event == 'on') this.display = false;
    else if (event == 'off') this.display = true;
  }
  toggle() {
    this.display = !this.display;
  }
  toggleTwo() {
    this.toggleDiv = !this.toggleDiv;
  }

  updateName(event :Event
  ){
    const val = (event.target as HTMLInputElement).value
    // console.log(val)
    this.name  =val;

  }
}
