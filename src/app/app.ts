import { Component, signal, effect } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { ProfileComponent } from './profile/profile.component';
// import {signal} from 'rxjs'
import {NgFor, NgIf} from'@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from './header/header';
import { Home } from './home/home';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login,
    RouterLink ,RouterOutlet,
    Header,Home,
    ProfileComponent, FormsModule ,NgIf, NgFor],
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
    {id:'1', name: 'Sonu', age: 24, email: 'sonu@gmail.com' },
    {id:'2', name: 'golu', age: 26, email: 'golu@gmail.com' },
    {id:'3', name: 'raghav', age: 26, email: 'golu@gmail.com' },
    {id:'4', name: 'vipul', age: 26, email: 'vipul@gmail.com' },
    {id:'5', name: 'banti', age: 26, email: 'banti@gmail.com' },
    {id:'6', name: 'birju', age: 26, email: 'birju@gmail.com' },
  ];
  nameHomeArray =['sonu', 'mayank', 'Golu', 'Bhuonedra']
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
    console.log(this.name);
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

  updateName(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    // console.log(val)
    this.name = val;
  }

  task ="";
  taskList :{id:number, task :string}[] =[];
  addTask(){
        this.taskList.push({id : this.taskList.length+1, task :this.task});
        this.task ="";
      }
    onDelete(id :number){
      this.taskList = this.taskList.filter((item)=>item.id != id)

    }
    show =false;

}
