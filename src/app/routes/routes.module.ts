import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './component/inicio/inicio.component';
import { PeliculasComponent } from './component/peliculas/peliculas.component';
import { SeriesComponent } from './component/series/series.component';
import { IngresarComponent } from './component/ingresar/ingresar.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './component/dashboard/dashboard.component';



@NgModule({
  declarations: [
    InicioComponent,
    PeliculasComponent,
    SeriesComponent,
    IngresarComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InicioComponent,
    PeliculasComponent,
    SeriesComponent,
    IngresarComponent
  ]
})
export class RoutesModule { }