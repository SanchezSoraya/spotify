import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
   }

   //centralizar 
   getQuery ( query: string) {
     const url=`https://api.spotify.com/v1/${ query }`;

     const headers =new HttpHeaders({
      'Authorization' : 'Bearer BQBhgSrphJ18CRbOF3PFtDqs9YG8UEXpe6lB7WIKxflQBF3b3g5AOXyYBgLAllDK21pUOQnH3-e6NxzJFC0'
    });
    return this.http.get(url, {headers});
   }



   getNewReleases(){
     return this.getQuery('browse/new-releases?limit=20')
      //operador MAP 
      .pipe( map ((data:any) => data['albums'].items));
   }


// COMPONENTES DE BUSQUEDA DE ARTISTAS 
   getArtistas(termino: string){

    return this.getQuery(`search?query=${ termino }&type=artist&limit=15`)
    //operador MAP 
    .pipe( map ((data:any) => data['artists'].items));
        

  
   }

   // COMPONENTES DE BUSQUEDA DE ARTISTAS 
   getArtista(id: string){

    return this.getQuery(`artists/${ id }`)
    //operador MAP 
    //.pipe( map ((data:any) => data['artists'].items));
        
   }
    // SERVICIO: TOP-TRACKS
    getTopTracks(id: string){

      return this.getQuery(`artists/${ id }/top-tracks?market=us`)
      //operador MAP 
      .pipe( map ((data:any) => data['tracks']));
          
  
    
     }
}
