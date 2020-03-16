import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchComponent} from './components/search/search.component';
import {MovieShowComponent} from './components/movie-show/movie-show.component';
import {TvShowComponent} from './components/tv-show/tv-show.component';


const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'search', component: SearchComponent},
  {path: 'movie/:movieId', component: MovieShowComponent},
  {path: 'tv/:tvId', component: TvShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
