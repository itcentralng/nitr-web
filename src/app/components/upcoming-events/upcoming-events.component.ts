import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent implements OnInit {
  public events: any = [];
  private postPage = 'posts';
  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.api.get(
      this.postPage+
      '?type.name=events&_limit=5&_sort=createdAt:desc'
      ).subscribe(response => {
      this.events = response;
    });
  }

}
