import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  name :string | null ="";
 constructor( private route :ActivatedRoute){
  

 }

ngOnInit(){


  this.route.params.subscribe((param)=>{
    this.name =param['name']
  })
}

}
