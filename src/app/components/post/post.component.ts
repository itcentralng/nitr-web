import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post = {title: '', content: '', image: {url: ''}, createdAt: '', type: {name: ''}};

  constructor() { }

  ngOnInit(): void {
    console.log(this.post);
    console.log(this.post.title);
    console.log(this.post.content);
  }

}
