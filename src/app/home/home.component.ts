import { PageInfo } from './../page-info';
import { Character } from './../character';
import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading: boolean = true
  characters: Array<Character> = []
  pageInfo: PageInfo = {
    count: 0,
    pages: 0,
    next: "",
    prev: ""
  }

  constructor(private fetchService: FetchService ) {
  }

  ngOnInit(): void {
    this.fetchCharacters()
  }

  fetchCharacters(id=1) {
    this.loading = true
    this.fetchService.getCharacters(id).subscribe((data: any) => {
      console.log(data);
      this.characters = data.results;
      this.pageInfo = data.info
      this.loading = false
    });
  }

  onPageChanges(e:any) {
    console.log(e.pageIndex+1)
    this.fetchCharacters(e.pageIndex+1)
  }
}
