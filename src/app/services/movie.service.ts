import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SearchList} from '../models/search-list';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Movie} from '../models/movie';
import {Tv} from '../models/tv';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
  }

  /**
   * @param query some query
   * @param page page number
   */
  public getSearch(query: string, page: string = '1'): Observable<SearchList> {
    return this.http.get<SearchList>(`${environment.apiUrl}/search`, {
      params: new HttpParams().set('query', query).set('page', page),
    });
  }

  /**
   * @param movieId id's of the movie
   */
  public getMovie(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(`${environment.apiUrl}/movie/${movieId}`);
  }

  public getTv(tvId: number): Observable<Tv> {
    return this.http.get<Tv>(`${environment.apiUrl}/tv/${tvId}`);
  }

  /**
   * gets trendings
   * @param mediaType all,movie,tv,person
   * @param timeWindow day,week
   */
  public getTrending(mediaType: string = 'all', timeWindow: string = 'week'): Observable<SearchList> {
    // return this.http.get<SearchList>(`${environment.apiUrl}/trending/${mediaType}/${timeWindow}`);
    return this.http.get<SearchList>(`${environment.apiUrl}/trending`);
  }
}
