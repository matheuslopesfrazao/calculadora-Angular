import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components';
import { CalculadoraService } from './services/calculadora.service';




@NgModule({
  declarations: [CalculadoraComponent], /* Aqui ficam os componentes que fazem parte do módulo*/
  imports: [CommonModule /* Todos os módulos que são comuns, ou seja, que não é o principal, devem ter essa declaração de "CommonModule" */],
  exports: [CalculadoraComponent],
  providers: [CalculadoraService]
})
export class CalculadoraModule { }
