import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  public departments: any;
  private postPage = 'posts';
  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    // Fetch API
    // this.api.get(
    //   this.postPage+
    //   '?type.name=departments&_limit=20&_sort=createdAt:desc'
    //   ).subscribe(response => {
    //   this.departments = response;
    // });

    // Fetch Data
    this.departments = [
      {
        title:"Animal African Trypanosomiasis Research Department",
        image: {url:"assets/departments/1.jpg"},
        _id:1
      }
    ]
  }

}
