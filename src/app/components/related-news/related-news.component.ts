import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-related-news',
  templateUrl: './related-news.component.html',
  styleUrls: ['./related-news.component.css']
})
export class RelatedNewsComponent implements OnInit {

  @Input() related: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
