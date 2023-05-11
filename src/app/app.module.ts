import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SnakeComponent } from './snake/snake.component';
import { DamasComponent } from './damas/damas.component';
import { PptComponent } from './ppt/ppt.component';

@NgModule({
  declarations: [
    AppComponent,
    SnakeComponent,
    DamasComponent,
    PptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
