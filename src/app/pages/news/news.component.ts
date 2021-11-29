import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  postPage = 'posts';
  id: string = this.route.snapshot.params.id;
  news: any = {};
  related: any = [];
  latestnews: any = [];

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    ) { }

  ngOnInit(): void {
        this.api.get(
          this.postPage+
          '?_id='+this.id
          ).subscribe((response: any) => {
          this.news = response[0];
        });
        
        this.api.get(
          this.postPage+
          '?type.name=news&_id_ne='+this.id+'&_limit=5&_sort=createdAt:desc'
          ).subscribe(response => {
          this.related = response;
        });

        this.api.get(
          this.postPage+
          '?type.name=news&_limit=20&_sort=createdAt:desc'
          ).subscribe(response => {
          this.latestnews = response;
        });
    }
}
