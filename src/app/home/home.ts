import { Component } from '@angular/core';
import { RouterLink, Router } from "@angular/router";

@Component({
  selector: 'home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router :Router){

  }

  goToProfile(name :string){
    this.router.navigate(["/profile",{name :name}])
  }
}
