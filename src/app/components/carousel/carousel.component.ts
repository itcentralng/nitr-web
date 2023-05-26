import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  public slides: any = [];
  private sliderPage = 'sliders?populate=slide';
  public storage = environment.STORAGE
  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    // Fetch API
    this.api.get(
      this.sliderPage
      ).subscribe((response: any) => {
        this.slides = response.data[0].attributes.slide.data;
    });
    // Local Fetch
    // this.slides = [
    //   {url:"assets/slides/1.jpg"},
    //   {url:"assets/slides/2.jpg"},
    //   {url:"assets/slides/3.jpg"},
    //   {url:"assets/slides/4.jpg"},
    // ]
  }

}
