import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  filterPost='';
  posts: heroe[]=[];
  constructor(private _heroesService:HeroesService,
              private router:Router) { }

  ngOnInit(): void {
    this.posts= this._heroesService.getHeroe();
    console.log(this.posts)
  }

  filtre(str:string){
    console.log("si da");
    if(str!==''){
      this.router.navigate(['/oculto',str]);
    }
    
  }

  

}
