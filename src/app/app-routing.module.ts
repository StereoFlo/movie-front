import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchFormComponent} from './components/search-form/search-form.component';


const routes: Routes = [
  {path: '', component: SearchFormComponent},
  {path: 'search', component: SearchFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
