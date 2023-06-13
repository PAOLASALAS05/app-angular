import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './component/inicio/inicio.component';
import { PeliculasComponent } from './component/peliculas/peliculas.component';
import { SeriesComponent } from './component/series/series.component';
import { IngresarComponent } from './component/ingresar/ingresar.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    InicioComponent,
    PeliculasComponent,
    SeriesComponent,
    IngresarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ],
  exports: [
    InicioComponent,
    PeliculasComponent,
    SeriesComponent,
    IngresarComponent,
  ],
})
export class RoutesModule { }