import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
    selector :'profile',
    // template : '<h1>Profile component</h1>',
    // styles : 'h1{color: greenyellow;',
    templateUrl :'./profile.component.html',
    styleUrl :'./profile.component.css'
})
export class ProfileComponent{
    userName :string | null = "";
 constructor(private route : ActivatedRoute){
 
 }
 ngOnInit(): void { 
     let name  =this.route.snapshot.paramMap.get('name');
    console.log(name);
     this.userName =name;
     console.log("ngOninit profile called")
 }
}