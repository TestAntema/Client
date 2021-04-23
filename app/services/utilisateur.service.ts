import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utilisateur} from "../model/utilisateur";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  API_URI = 'http://localhost:9090';

  constructor(private http: HttpClient) { }

  getUtilisateurs(){
    return this.http.get('${this.API_URI}/Utilisateur');
  }

  saveUtilisateur(utilisateur : Utilisateur){
    return this.http.post('${this.API_URI}/Utilisateur', utilisateur);
  }

  deleteUtilisateur(id: string){
    return this.http.delete('${this.API_URI}/Utilisateur/${id}');
  }
}
