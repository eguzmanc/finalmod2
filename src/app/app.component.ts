import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ApiRestService } from './service/api-rest.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  private edad_edwin=22;

  constructor(private serv_rest: ApiRestService){   }

  ngOnInit(): void {
      this.serv_rest.getEstudiante().subscribe(datos=> {
        console.log(datos);
      });
  }

  guardarEst(): void{
    this.serv_rest.adicionarEstudiante({
      "nombre": "Edson",
      "Apellido": "Larrazabal",
      "edad": 21,
      "carrera": "Medicina"
    }).subscribe(datos=>{
      console.log("El nuevo estudiante está guardado correctamente");
      console.log(datos);
    });
  };

  nuevaedad():void{
    this.serv_rest.editarEstudiante("1",{
      "nombre": "Edwin",
      "Apellido": "Guzman",
      "edad": this.edad_edwin + 1,
      "carrera": "Ingenieria de Sistemas"
    }).subscribe(data => {
      console.log("se actualizo la edad de Edwin");
      console.log(data);
    });
  };
}
