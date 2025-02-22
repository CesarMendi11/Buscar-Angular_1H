import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  heroe: any ={};

  constructor(private activateRoute:ActivatedRoute, private _heroeService:HeroesService){
    this.activateRoute.params.subscribe(params =>{
      this.heroe=this._heroeService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }
}
