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
    // Fetch API
    // this.api.get(this.aboutPage).subscribe(response => {
    //   this.about = response;
    // })

    // Fetch Data
      this.about = {
        title:'About US',
        content: "NITR has mandate to conduct research and develop appropriate technologies, as well as processes in the control and elimination of the two diseases (African trypanosomiasis and onchocerciasis) and their vectors, tsetse and black flies.",
        image:{url:'assets/slides/1.jpg'}
      }
  }

}
