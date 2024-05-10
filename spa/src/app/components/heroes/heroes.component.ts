import { Component } from '@angular/core';
import { Heroes, HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes:Heroes[]=[];
  constructor(private _heroesServices:HeroesService, private router:Router){
    
  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.heroes=this._heroesServices.getHeroes();
    console.log(this.heroes);
  }

verHeroe(idx:number){
  this.router.navigate(['/heroe',idx])
console.log(idx)
}

}
