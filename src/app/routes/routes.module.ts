import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './component/inicio/inicio.component';
import { PeliculasComponent } from './component/peliculas/peliculas.component';
import { SeriesComponent } from './component/series/series.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { IngresarComponent } from './component/ingresar/ingresar.component';



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
    FormsModule,
    ],
  exports: [
    InicioComponent,
    PeliculasComponent,
    SeriesComponent,
    IngresarComponent,
  ],
})
export class RoutesModule { }
