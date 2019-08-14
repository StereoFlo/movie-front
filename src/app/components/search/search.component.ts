import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MovieService} from '../../services/movie.service';
import {SearchItem} from '../../models/search-item';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  results: [SearchItem];
  trending: [SearchItem];
  countResults = 0;
  isSubmitted = false;
  isLoading = false;
  query: string;

  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder, private movieService: MovieService, private route: ActivatedRoute, private router: Router) { }

  /**
   * init
   */
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      query: [
        '',
        [
          Validators.required,
          Validators.min(2),
          Validators.max(100)
        ],
      ]
    });
    this.route.queryParams.subscribe(data => {
      if (data.query) {
        this.query = data.query;
        this.getForm().query.setValue(data.query);
        this.onSubmit();
      }
    }).unsubscribe();

    this.getTrending();
  }

  /**
   * @return Object
   */
  public getForm() {
    return this.searchForm.controls;
  }

  /**
   * gets a trending info
   */
  public getTrending(): void {
    if (this.countResults === 0) {
      this.movieService.getTrending().subscribe(data => {
        this.trending = data.results;
      });
    }
  }

  /**
   * onSubmit handler
   */
  public onSubmit(): void {
    this.results = null;
    if (this.getForm().invalid) {
      console.log('invalid');
    }
    if (!this.getForm().query.value) {
      throw new Error('query is empty');
    }
    this.isSubmitted = true;
    this.isLoading = true;
    this.query = this.getForm().query.value;
    this.trending = null;
    this.movieService.getSearch(this.getForm().query.value).subscribe(data => {
      this.countResults = data.total_results;
      this.results = data.results;
      this.isLoading = false;
    });

    if (this.query) {
      this.router.navigate(['search'], { queryParams: { query: this.query } });
    }
  }
}
