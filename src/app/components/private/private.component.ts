import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  bandera: boolean=false;
  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

  cambiarBandera():void{
    this.bandera=true;
  }
  

}
