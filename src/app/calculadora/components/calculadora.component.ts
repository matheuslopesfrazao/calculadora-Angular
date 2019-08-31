import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services/calculadora.service';

@Component({
  selector: 'app-calculadora', /* Essa será a tag para chamar este componente */
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

/* A injeção de dependências é feita dentro do construtor */
export class CalculadoraComponent implements OnInit {

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit() {
  }

}
