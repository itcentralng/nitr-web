import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  public storage = environment.STORAGE
  public departments: any;
  private postPage = 'posts';
  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    // Fetch API
    this.api.get(
      this.postPage+
      '?filters[type][name][$eq]=departments&populate=*'
      ).subscribe((response: any) => {
      this.departments = response.data;
      console.log(this.departments)
    });

    // Fetch Data
    // this.departments = [
    //   {
    //     title:"Animal African Trypanosomiasis Research Department",
    //     image: {url:"assets/departments/1.jpg"},
    //     _id:1
    //   }
    // ]
  }

}
