import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { heroe, HeroesService } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-oculto',
  templateUrl: './oculto.component.html',
  styleUrls: ['./oculto.component.css']
})
export class OcultoComponent implements OnInit {
  heores:heroe[]=[];
  parametro:string='';
  constructor(private activateRoute: ActivatedRoute,
    private _heroeD: HeroesService,private router: Router) {
      this.activateRoute.params.subscribe(params =>{
        console.log(params,'linea 18');
        this.parametro = params['str'];
        this.pintar()
     });
    

    }
    ngOnInit(): void {
      console.log("parametro es ",this.parametro);
      this.pintar()
    }
    verMas(id:number){
      console.log(id);
      this.router.navigate(['/heroeD',id]);
      
    }
    limpiar(){
      this.parametro='';
    }
    pintar(){
      
      const pipe= new FilterPipe();
      this.heores=pipe.transform(this._heroeD.getHeroe(),this.parametro,);
      console.log(this.heores);
    }
  
  }

