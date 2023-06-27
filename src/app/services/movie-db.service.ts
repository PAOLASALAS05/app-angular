import { HttpClient, httpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MovieDBService {

  key: string = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzI5ZGYxZDk3ZjRjYzFiZGFhNWI1MmMwMmQ3ZTAwOSIsInN1YiI6IjY0OWIzNjZkYWFkOWMyMDBhZTcwYzFlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vml0IS-VsCoD3q-fR9B-zZPC6yUOH1Y-LFTTHqjHIqI

  constructor(
    private _httpClient : httpClient
    baseURL : string =  'https://api.themoviedb.org/3/movie/11?api_key=2329df1d97f4cc1bdaa5b52c02d7e009'
  ) { }
}
