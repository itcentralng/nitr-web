import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-about-nitr',
  templateUrl: './about-nitr.component.html',
  styleUrls: ['./about-nitr.component.css']
})
export class AboutNitrComponent implements OnInit {
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
