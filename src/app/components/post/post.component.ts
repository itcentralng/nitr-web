import { Component, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post = {title: '', content: '', image: {data:{attributes:{url: ''}}}, createdAt: '', type: {name: ''}};

  public storage = environment.STORAGE

  public getImages = (content: string)=>{
    return content.split("/uploads/").join(this.storage+'/uploads/');
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.post);
    console.log(this.post.title);
    console.log(this.post.content);
  }

}
