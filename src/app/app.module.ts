import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SearchFormComponent} from './components/search-form/search-form.component';
import {HttpClientModule} from '@angular/common/http';
import { MovieShowComponent } from './components/movie-show/movie-show.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    MovieShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
