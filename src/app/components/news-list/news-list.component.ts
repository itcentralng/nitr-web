import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  public latestnews: any;
  private postPage = 'posts';
  public storage = environment.STORAGE
  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.api.get(
      this.postPage+
      '?filters[type][name][$eq]=news&populate=*'
      ).subscribe(response => {
      this.latestnews = response;
      this.latestnews = this.latestnews.data;
    });
  }

}
