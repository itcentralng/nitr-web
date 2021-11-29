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
    this.api.get(
      this.sliderPage
      ).subscribe((response: any) => {
        this.slides = response.images;
    });
  }

}
