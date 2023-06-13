import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './routes/component/inicio/inicio.component';
import { PeliculasComponent } from './routes/component/peliculas/peliculas.component';
import { SeriesComponent } from './routes/component/series/series.component';
import { IngresarComponent } from './routes/component/ingresar/ingresar.component';

const routes: Routes = [  
  {
    path: "inicio",
    component: InicioComponent
  },
  {
    path: "peluculas",
    component: PeliculasComponent
  },
  {
    path: "series",
    component: SeriesComponent
  },
  {
    path: "ingresar",
    component: IngresarComponent
  },
  {
    path: "**",
    redirectTo: "inicio"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
