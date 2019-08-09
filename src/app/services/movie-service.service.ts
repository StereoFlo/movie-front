import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SearchList} from '../models/search-list';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http: HttpClient) { }

  public getSearch(query: string, page: string = '1'): Observable<SearchList> {
    return this.http.get<SearchList>('http://127.0.0.1:8080/search', {
      params: new HttpParams().set('query', query).set('page', page),
    });
  }
}
