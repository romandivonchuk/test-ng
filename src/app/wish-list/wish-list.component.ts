
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit  {
  wishList: string[] = []
  episode = new FormControl('');
  ngOnInit() {
    this.episode.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  addToList() {
    if (this.episode.value) {
      this.wishList.push(this.episode.value)
      this.episode.reset()
    }
  }
}


