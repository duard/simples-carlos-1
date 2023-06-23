import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TesteComponent } from './components/teste/teste.component';
import { BindCssDirective } from './directives/bind-css.directive';
import { ChangeColorDirective } from './directives/change-color.directive';
import { CommonModule } from '@angular/common';
import { TestDirective } from './directives/test.directive';
import { VGridDirective } from './directives/v-grid.directive';

@NgModule({
  declarations: [AppComponent, BindCssDirective, ChangeColorDirective, TestDirective, VGridDirective],
  providers: [],
  bootstrap: [AppComponent],
  imports: [CommonModule, BrowserModule, TesteComponent],
})
export class AppModule {}
