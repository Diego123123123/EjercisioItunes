import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResultResponse} from '../models/result-response';

@Injectable({
  providedIn: 'root'
})
export class ItunesService {

  readonly ITUNES_URL = 'https://itunes.apple.com/';

  constructor(private httpClient: HttpClient) { }

  getObservableByArtist(artistName: string): Observable<ResultResponse> {
    return this.httpClient.get<ResultResponse>(this.ITUNES_URL + 'search?term=' + artistName.replace(' ', '+'));
  }
}
