import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public about: any = {title: '', content: '', image: {url: ''}};
  private aboutPage = 'about';
  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.api.get(this.aboutPage).subscribe(response => {
      this.about = response;
    })
  }

}
