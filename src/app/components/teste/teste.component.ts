import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindCssDirective } from 'src/app/directives/bind-css.directive';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [CommonModule, BrowserModule, FormsModule],

  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss'],
})
export class TesteComponent {
  arrName = [1, 2, 3];
  colors = ['red', 'blue', 'pink'];
  variableName: string | undefined;
  variableValue: string | undefined;

  @Output() open: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.variableName = 'background-color';
    this.variableValue = 'red';
  }

  change() {
    console.log(`teste`);
  }
}
