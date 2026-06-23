import { Component } from '@angular/core';
import { RouterLink, Router } from "@angular/router";

@Component({
  selector: 'home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {


   users = [
    {id:'1', name: 'Sonu', age: 24, email: 'sonu@gmail.com' },
    {id:'2', name: 'golu', age: 26, email: 'golu@gmail.com' },
    {id:'3', name: 'raghav', age: 26, email: 'golu@gmail.com' },
    {id:'4', name: 'vipul', age: 26, email: 'vipul@gmail.com' },
    {id:'5', name: 'banti', age: 26, email: 'banti@gmail.com' },
    {id:'6', name: 'birju', age: 26, email: 'birju@gmail.com' },
  ];
  constructor(private router :Router){

  }

  goToProfile(name :string){
    this.router.navigate(["/profile",{name :name}])
  }
}
