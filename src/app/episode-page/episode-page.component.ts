import { Episodes } from './../episodes';
import { Component, OnInit,ViewChild,AfterViewInit, ElementRef } from '@angular/core';
import { FetchService } from '../fetch.service';
import { PageInfo } from '../page-info';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-episode-page',
  templateUrl: './episode-page.component.html',
  styleUrls: ['./episode-page.component.scss']
})
export class EpisodePageComponent implements OnInit, AfterViewInit {

  feedbacks: Episodes[] = [];

  sort: any;
  @ViewChild(MatSort, {static: false}) set content(content: ElementRef) {
        this.sort = content;
        if (this.sort){
           this.dataSource.sort = this.sort;
        }
  }


  displayedColumns: string[] =['id', 'name', 'created' ,'episode'];
  dataSource: MatTableDataSource<Episodes>  = new MatTableDataSource();
  loading: boolean = true
  pageInfo: PageInfo = {
    count: 0,
    pages: 0,
    next: "",
    prev: ""
  };

  constructor(private fetchService: FetchService) {
  }

  ngOnInit() {
    this.fetchEpisodes()
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  fetchEpisodes(id=1) {
    this.loading = true
    this.fetchService.getEpisodes(id).subscribe((data: any) => {
      this.feedbacks = data.results
      this.dataSource = new MatTableDataSource(this.feedbacks);
      this.dataSource.sort = this.sort;
      this.pageInfo = data.info
      this.loading = false
    });
  }

  onPageChanges(e:any) {
    this.fetchEpisodes(e.pageIndex+1)
  }

}
