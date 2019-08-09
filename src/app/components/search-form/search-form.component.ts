import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MovieService} from '../../services/movie.service';
import {SearchItem} from '../../models/search-item';

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

  constructor(private formBuilder: FormBuilder, private movieService: MovieService) { }

  /**
   * init
   */
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      query: ['', Validators.required]
    });
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
    this.movieService.getSearch(this.getForm().query.value).subscribe(data => {
      this.countResults = data.total_results;
      this.results = data.results;
      this.isLoading = false;
    });
  }
}
