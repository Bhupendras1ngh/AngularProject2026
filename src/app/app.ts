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
  count = 0;
  name ="";
  displayname ="";
  email ="";
  // showName ="";
  handleCount(val :string){
    if(val =="minus"){
      if( this.count >=1 ) this.count -=1;}
    else if ( val =="add") this.count +=1;
    else if (val =="reset") this.count =0;
  }
handleEvent(event : any){console.log('function called ', event);}
getName(event :Event){
  this.name =(event.target as HTMLInputElement).value
 console.log(name);
}
displayName(){ this.displayname = this.name;
console.log(this.displayname)
}
setName(){
  this.name ="Ravan";
  this.displayname = this.name;
}
getEmail(event :string){console.log("get Email", event); this.email = event}
// setEmail(event :string){console.log("set Email", event)}

}
