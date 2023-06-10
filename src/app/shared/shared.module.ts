import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './component/movie-card/movie-card.component';



@NgModule({
  declarations: [
    MovieCardComponent
  ],
  imports: [
  CommonModule,
],
  exports: [
    MovieCardComponent,
    ]
})
export class SharedModule { }
