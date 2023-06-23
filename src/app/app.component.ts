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
  logo = 'header';
  meuvar: string = `CHANGE`;

  minhaArea = "'header'";
  // minhaArea = "'header'";

  constructor() {}

  ngOnInit(): void {
    this.variableName = 'background-color';
    this.variableValue = 'red';
    this.minhaArea = `'${this.logo} header header' 'sidebar-left main sidebar-right' 'footer footer footer '`;
  }

  changeClass() {
    console.log(`BEFOTE`, this.logo);
    this.logo = this.logo === 'logo' ? 'header' : 'logo';
    console.log(`AFTER`, this.logo);
    this.minhaArea = `'${this.logo} header header' 'sidebar-left main sidebar-right' 'footer footer footer '`;
  }
}
