import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'simples-arquitecture';
  variableName: string | undefined;
  variableValue: string | undefined;

  constructor() {}

  ngOnInit(): void {
    this.variableName = 'background-color';
    this.variableValue = 'red';
  }
}
