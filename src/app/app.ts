import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, ProfileComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prelims2026');
  name:string = "Golu"

  updateName(name : string){
    this.name =name;
  } 
  onClick(){
    // alert("function click button calledd");
    console.log("click  ", this.name)
    // this.otherFunction();
    this.updateName("Raju")
    console.log(this.name);
  }
  otherFunction(){
    console.log("Other function called ")
  }
}
