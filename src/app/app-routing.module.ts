import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchFormComponent} from './components/search-form/search-form.component';
import {MovieShowComponent} from './components/movie-show/movie-show.component';


const routes: Routes = [
  {path: '', component: SearchFormComponent},
  {path: 'search', component: SearchFormComponent},
  {path: 'movie/:movieId', component: MovieShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
