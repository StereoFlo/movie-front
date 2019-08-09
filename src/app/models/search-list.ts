import {SearchItem} from './search-item';

export class SearchList {
  page: number;
  'total_results': number;
  'total_pages': number;
  results: [SearchItem];
}
