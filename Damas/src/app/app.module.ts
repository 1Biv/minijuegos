import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableroComponent } from './Componentes/tablero/tablero.component';
import { FichaComponent } from './Componentes/ficha/ficha.component';


@NgModule({
  declarations: [
    AppComponent,
    TableroComponent,
    FichaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
