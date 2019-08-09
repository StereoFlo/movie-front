import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from '../../services/movie.service';
import {Movie} from '../../models/movie';

@Component({
  selector: 'app-movie-show',
  templateUrl: './movie-show.component.html',
  styleUrls: ['./movie-show.component.css']
})
export class MovieShowComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService) { }

  movieId: number;
  movie: Movie;

  ngOnInit() {
    if (!this.route.snapshot.params.movieId) {
      this.router.navigate(['/ticket']);
      return;
    }
    this.movieId = +this.route.snapshot.params.movieId;
    this.show();
  }

  public show() {
    this.movieService.getMovie(this.movieId).subscribe(data => {
      this.movie = data;
    });
  }
}
