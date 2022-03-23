import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
// COMPONENTES DE BUSQUEDA DE ARTISTAS 
export class SearchComponent  {
  artistas: any[] = [];
  loading: boolean=false;

  constructor(private spotify: SpotifyService) { }
  buscar(termino: string){
    this.loading = true;

    console.log(termino);
    this.spotify.getArtistas( termino )
    .subscribe( (data: any) => {
      console.log( data );
      this.artistas = data;
      setTimeout(() => {
        this.loading = false;
        
      }, 100);
     
    });
  }
  

}
