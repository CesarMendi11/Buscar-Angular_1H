import { Component } from '@angular/core';
import { HeroesService, Heroes } from '../../services/heroes.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  nombreHeroe: string = ''; 
  heroeEncontrado: Heroes | null = null;

  constructor(private heroesService: HeroesService) {}

  buscarHeroe() {
    if (this.nombreHeroe.trim() !== '') { 
      const heroesEncontrados = this.heroesService.buscarHeroesPorNombre(this.nombreHeroe);
      this.heroeEncontrado = heroesEncontrados.length > 0 ? heroesEncontrados[0] : null;
    } else {
      this.heroeEncontrado = null; 
    }
  }
}
