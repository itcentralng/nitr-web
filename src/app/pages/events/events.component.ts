import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  postPage = 'posts';
  id: string = this.route.snapshot.params.id;
  event: any = {};
  events: any = [];

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router,
    ) { 
      // force route reload whenever params change;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

  ngOnInit(): void {
        this.api.get(
          this.postPage+
          '?_id='+this.id
          ).subscribe((response: any) => {
          this.event = response[0];
        });
    }
}
