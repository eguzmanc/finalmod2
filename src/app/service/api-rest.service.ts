import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  private apiUrl = 'http://localhost:3000/estudiantes'; // endpoint

  constructor(private http: HttpClient) { }

  getEstudiante(): Observable<any> {
    console.log("Te devuelvo los estudiantes");
    return this.http.get(this.apiUrl);
  }

  adicionarEstudiante (nuevo_estudiante: any): Observable <any> {
    return this.http.post(this.apiUrl, nuevo_estudiante);
  }

  editarEstudiante (id:string, datos_nuevos:any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, datos_nuevos)
  }

  borrarEstudiante(id:Number): Observable<any>{
    return this.http.delete()
  }
}
