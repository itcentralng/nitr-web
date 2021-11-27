import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-nitr',
  templateUrl: './about-nitr.component.html',
  styleUrls: ['./about-nitr.component.css']
})
export class AboutNitrComponent implements OnInit {
  public about: any = {title: '', content: '', image: {url: ''}};
  private aboutPage = 'about';
  private base = environment.API;
  public storage = environment.STORAGE;
  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.api.get(this.base+this.aboutPage).subscribe(response => {
      this.about = response;
    })
  }

}
