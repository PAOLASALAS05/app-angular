import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MovieDBService } from 'src/app/services/movie-db.service';
import { MoviesSeries } from 'src/app/types/moviesSeries';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
  providers: [FirestoreService]
})
export class SeriesComponent {
  movies: any[] = [];

  constructor(
    private _movieDBService: MovieDBService,
    private _firestoreService: FirestoreService
  ){}

  ngOnInit(){
    this.getAllSeries();
  }

  getAllSeries(){
    this._movieDBService.getSerie().subscribe({
      next: (response) => {
        this.series = response.results;
        console.log('VARIABLE movies', this.serie);
      },
      error: (error) => {
        console.log('ERROR', error);
      },
      complete() {
        console.log('LA EJECUCión terminó');
      },
    })
  }

  addSerieToFirebase(id: number) {
    console.log('Serie para agregar', id);
    const auxiliar = this.Serie.find((value) => value.id == id );
    const SerieParaGuardar : Serie = {
      id_api: auxiliar.id,
      title: auxiliar.title,
      poster_path: auxiliar.poster_path,
      media_type: 'Serie',
      vote_average: auxiliar.vote_average,
      name: auxiliar.name
    }
    !serieParaGuardar.name && delete serieParaGuardar.name;
    !serieParaGuardar.title && delete serieParaGuardar.title;
    this._firestoreService.addSerie(serieParaGuardar).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
    
  }

  deleteSerieFromFirebase(id :number) {
    console.log('Serie para eliminar', id);
    let auxResponseSerie: Serie[] = [];
    let serieEncontrada: Serie| undefined;
    this._firestoreService.getSerie().subscribe({
      next: (response) => {
        auxResponseSerie = response;
        console.log('RESPONSE', response);
        serieEncontrada = auxResponseSerie.find((value) => value.id_api === id);
        console.log('serieEncontrada', serieEncontrada);
        this._firestoreService.deleteSerie(SerieEncontrada!.id!).then((response) => {
          console.log(response);
          }).catch((error) => {
          console.log(error);
        })
      }
    })
  }
}

