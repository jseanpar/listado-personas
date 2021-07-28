import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(
    private loggingService:LoggingService,
    private router: Router,
    private personasService: PersonasService){
      this.personasService.saludar.subscribe(
        (indice: number) => alert("El índice es: " + indice)
      );
    }

  ngOnInit(): void {
  this.personasService.obtenerPersonas()
  .subscribe(
    (personas: Persona[]) => {
      this.personas = personas;
      this.personasService.setPersonas(personas)
    }
  );
  }

  agregar(){
    this.router.navigate(['personas/agregar'])
  }

}
