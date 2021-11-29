import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  public latestnews: any;
  private postPage = 'posts';
  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.api.get(
      this.postPage+
      '?type.name=news&_limit=20&_sort=createdAt:desc'
      ).subscribe(response => {
      this.latestnews = response;
    });
  }

}
