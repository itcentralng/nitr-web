import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  public slides: any = [];
  private sliderPage = 'slider';
  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    // Fetch API
    // this.api.get(
    //   this.sliderPage
    //   ).subscribe((response: any) => {
    //     this.slides = response.images;
    // });
    // Local Fetch
    this.slides = [
      {url:"assets/slides/1.jpg"},
      {url:"assets/slides/2.jpg"},
      {url:"assets/slides/3.jpg"},
      {url:"assets/slides/4.jpg"},
    ]
  }

}
