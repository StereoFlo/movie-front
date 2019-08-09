import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MovieService} from '../../services/movie.service';
import {SearchItem} from '../../models/search-item';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  searchForm: FormGroup;
  results: [SearchItem];
  countResults: number;
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
      query: ['', Validators.required]
    });
    this.route.queryParams.subscribe(data => {
      if (data.query) {
        this.query = data.query;
        this.getForm().query.setValue(data.query);
        this.onSubmit();
      }
    }).unsubscribe();
  }

  /**
   * @return Object
   */
  public getForm() {
    return this.searchForm.controls;
  }

  /**
   * onSubmit handler
   */
  public onSubmit(): void {
    this.isSubmitted = true;
    this.isLoading = true;
    if (this.getForm().invalid) {
      console.log('invalid');
    }
    if (!this.getForm().query.value) {
      throw new Error('query is empty');
    }
    if (this.query) {
      this.router.navigate([''], { queryParams: { query: this.query } });
    }
    this.movieService.getSearch(this.getForm().query.value).subscribe(data => {
      this.countResults = data.total_results;
      this.results = data.results;
      this.isLoading = false;
    });
  }
}
