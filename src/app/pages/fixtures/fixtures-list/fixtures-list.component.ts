import { Component, OnInit } from '@angular/core';
import { Observable, pipe, switchMap } from 'rxjs';
import { Fixture } from '../models/fixture';
import { FixturesService } from '../services/fixtures.service';


@Component({
  selector: 'app-fixtures-list',
  templateUrl: './fixtures-list.component.html',
  styleUrls: ['./fixtures-list.component.scss']
})
export class FixturesListComponent implements OnInit {
  //searchResults$: Observable<Fixture[]>;
  displayedColumns: string[] = ['fixtureName', 'kickoff', 'venue'];
  searchResults: any;
  isShowLoader: boolean = true;
  constructor(
    private fixturesService: FixturesService
  ) { }

  ngOnInit(): void {
    // console.log('13 here in fix list componewnt');
    const searchParam = "";
    this.getSearchResults(searchParam);
  }

  getSearchResults(searchParam: string) {
    this.fixturesService.getFixtures(searchParam).subscribe((response => {
      this.searchResults = response;
      this.isShowLoader = false;
    }));
  }
}

