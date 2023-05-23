import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

import {PokemonData} from '../models/pokemonData'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL:string = ''
  private pokeData:PokemonData | any

  constructor(private http:HttpClient) {
    this.baseURL = environment.pokeAPI
   }

   getPokemon(pokemonName:string|number):Observable<PokemonData>{
    //if(typeof pokemonName == 'string')
      this.pokeData = this.http.get<PokemonData>(`${this.baseURL}${pokemonName}`)
    //else if(typeof pokemonName =='number')

    return this.pokeData

  }

}
