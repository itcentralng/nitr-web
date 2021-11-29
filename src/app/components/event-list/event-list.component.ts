import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  public events: any;
  private postPage = 'posts';
  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.api.get(
      this.postPage+
      '?type.name=events&_limit=20&_sort=createdAt:desc'
      ).subscribe(response => {
      this.events = response;
    });
  }

}
