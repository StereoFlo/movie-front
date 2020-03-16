import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from '../../services/movie.service';
import {Tv} from '../../models/tv';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService) { }

  movieId: number;
  movie: Tv;
  isLoading = false;
  error: string;

  ngOnInit() {
    if (!this.route.snapshot.params.tvId) {
      this.router.navigate(['/']);
      return;
    }
    this.movieId = +this.route.snapshot.params.tvId;
    this.show();
  }

  public show() {
    this.isLoading = true;
    this.movieService.getTv(this.movieId).subscribe(data => {
      this.movie = data;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      this.error = error.message;
    });
  }

}
