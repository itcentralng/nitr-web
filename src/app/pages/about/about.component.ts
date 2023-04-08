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
    // Fetch API
    // this.api.get(this.aboutPage).subscribe(response => {
    //   this.about = response;
    // })

    // Fetch Data
    this.about = {
      title: 'About Us', 
      content: `
      <h4>LOCATION OF NITR</h4>
Kaduna is 890 km from Lagos; and 186 km from Abuja, the Nation’s capital. The Institute is located in Kaduna city, Kaduna State, in the North-West geo-political zone of Nigeria, with geo-coordinates of 10.52o North latitude, 7.44o East longitude.
<h4>VISION STATEMENT</h4>
Nigeria in which trypanosomiasis and onchocerciasis no longer pose a threat to public health and socio-economic development.
<h4>MISSION STATEMENT</h4>
To conduct research and develop appropriate technologies and associated applications for the elimination of trypanosomiasis and onchocerciasis to achieve human and animal well-being, sustainable agriculture and land use; poverty reduction, socio-economic and rural development in Nigeria.
<h4>MANDATE OF NITR</h4>
NITR has mandate to conduct research and develop appropriate technologies, as well as processes in the control and elimination of the two diseases (African trypanosomiasis and onchocerciasis) and their vectors, tsetse and black flies. The Institute is to conduct research into:
<ul>
<li>Pathology, immunology and methods of treatment of the two diseases.</li>
 
<li>The ecology, life-cycle of the vectors, and mode of transmission of the two diseases.</li>
 
<li>Chemical, biological and other methods of vector control for the two diseases.</li>
 
<li>Socio-economic effects of the two diseases on the rural population.</li>
 
<li>Any other matter related to the two diseases.</li>
</ul>
 
<h4>CORE VALUES OF NITR</h4>
Transparency, sacrifice, dedication and staff motivation.
      `, 
      image: {url: 'assets/slides/1.jpg'}, 
      createdAt: '', 
      type: {name: ''}
    };
  }

}
