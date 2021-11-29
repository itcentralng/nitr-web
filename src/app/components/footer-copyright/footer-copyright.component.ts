import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer-copyright',
  templateUrl: './footer-copyright.component.html',
  styleUrls: ['./footer-copyright.component.css'],
})
export class FooterCopyrightComponent implements OnInit {
  public contact: any = {address: '', phone: '', email: ''};
  private contactPage = 'contact';
  public base = environment.API;
  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.api.get(this.contactPage).subscribe(response => {
      this.contact = response;
    })
  }

}
