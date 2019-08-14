import {Component, Input, OnInit} from '@angular/core';
import {SearchItem} from '../../models/search-item';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() list: [SearchItem];

  constructor() { }

  ngOnInit() {
  }

}
