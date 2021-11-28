import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {
  public latestnews: any;
  private postPage = 'posts';
  private base = environment.API;
  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.api.get(
      this.base+
      this.postPage+
      '?type.name=news&_limit=5&_sort=createdAt:desc'
      ).subscribe(response => {
      this.latestnews = response;
    });
  }

}
