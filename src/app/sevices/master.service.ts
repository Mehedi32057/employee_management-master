import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apireponse } from '../modal/role';

@Injectable({
  providedIn: 'root'
})

export class MasterService {

  constructor(private http:HttpClient) { }

  getDesignation():Observable<Apireponse>{
    return this.http.get<Apireponse>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation")
  }
}
