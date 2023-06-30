import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDBService {

  key: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzI5ZGYxZDk3ZjRjYzFiZGFhNWI1MmMwMmQ3ZTAwOSIsInN1YiI6IjY0OWIzNjZkYWFkOWMyMDBhZTcwYzFlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vml0IS-VsCoD3q-fR9B-zZPC6yUOH1Y-LFTTHqjHIqI';

  baseURL: string = 'https://api.themoviedb.org/3/movie/11'

  constructor(
    private _httpClient : HttpClient
  ) { }

  getTrending() :Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.key);

    return this._httpClient.get(this.baseURL + '/trending/all/week', {
      headers
    })
  }

  getMovies() :Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.key);

    return this._httpClient.get(this.baseURL + '/movie/popular', {
      headers
    })
  }

  getSeries() :Observable<any> {
    let headers = new HttpHeaders().set('Authorization', this.key);

    return this._httpClient.get(this.baseURL + '/tv/popular', {
      headers
    })
  }

}
