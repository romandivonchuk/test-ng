import { FetchService } from './../fetch.service';

import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit  {

  myControl = new FormControl();
  options: any[] = []
  filteredOptions: Observable<any[]>;
  wishList: any[] = []

  constructor(private fetchService: FetchService) {}
  ngOnInit() {
    if (this.options.length === 0) {
      this.fetchAllEpisodes()
    }

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(str => str ? this._filter(str) : this.options.slice())
      );
  }

  displayFn(str: any): string {
    return str ? str : '';
  }

  private _filter(str: string): any[] {
    const filterValue = str.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  addToList() {
    if (this.myControl.value) {
      let currEpisode = this.options.filter(item => item.name === this.myControl.value)
      this.wishList.push(currEpisode[0])
      this.myControl.reset()
    }
  }

  fetchAllEpisodes(id=1) {
    this.fetchService.getEpisodes(id).subscribe((value: any) => {
      value.results.map((item:any) => this.options.push(item))
      if (value.info.pages > id) {
        this.fetchAllEpisodes(id+1)
      }
     })
  }


}


