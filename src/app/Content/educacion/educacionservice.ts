import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { DatosEducacion } from './datosEducacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private url = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  // Add DatosEducacion - Create
  createEducacion(datosEducacion: DatosEducacion){
    return this.http.post<DatosEducacion>(`${this.url}creareducacion/`, datosEducacion)
  }

  // Get DatosEducacion - Read
  getEducacion(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'leereducacion')
  }

  // Get DatosEducacion by Id - Read
  getEducacionById(id: number): Observable<DatosEducacion>{
    return this.http.get<DatosEducacion>(`${this.url}datosEducacion/${id}`)
  }

  // Update DatosEducacion - Update
  updateDatoseducacion(idEducacion?: number ,datos?: any): Observable<any>{
    return this.http.put<any>(`${this.url}actualizar/${idEducacion}`, idEducacion)
  }

  // Delete DatosEducacion - Delete
  deleteDatoseducacion(idEducacion: number): Observable<any>{
    return this.http.delete<any>(`${this.url}delete/${idEducacion}`)
  }

}