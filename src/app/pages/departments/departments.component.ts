import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  postPage = 'posts';
  id: string = this.route.snapshot.params.id;
  department: any = {};

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router,
    ) { 
      // force route reload whenever params change;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

  ngOnInit(): void {
        // Fetch API
        this.api.get(
          this.postPage+
          '?filters[id][$eq]='+this.id
          ).subscribe((response: any) => {
          this.department = response.data[0].attributes;
        });

        // Fetch Data
        // this.department = {
        //   title:"Animal African Trypanosomiasis Research Department",
        //   image: {url:"assets/departments/1.jpg"},
        //   _id:1,
        //   content:`
        //   <p><b>(A)	Department:</b> 		Animal African Trypanosomiasis Research Department</p>
        //   <p><b>Name of HOD:</b>		Dr. Hamza A. Garba</p>
        //   <p><b>(B)	HOD’s Profile:</b> Dr. Hamza Adamu Garba was born on June 22, 1965 at Bashar, Wase LGA, Plateau State. He attended Local Education Authority Primary School Bashar for his primary education from 1972-1977. He obtained his secondary education at St. Joseph's College Vom from 1977- 1982. Because of his quest for knowledge, he attended Ahmadu Bello University Zaria, and obtained Doctor of Veterinary Medicine (DVM) in 1989 and Masters of Science (M.Sc.) in Parasitology at the Nigerian Defence Academy, Kaduna, in 2020. Dr. H. A. Garba observed the 1 year compulsory National Youth Service Corps (NYSC) programme at Uwani Veterinary Clinic Enugu, Ministry of Agriculture in the then Anambra State. He then started private veterinary practice before, he was employed by the Plateau State Government in 1999. He worked both in the Plateau State College of Agriculture and the Ministry of Agriculture and Natural Resources. He was employed in NITR in 2012 and has published four (4) research articles and two other manuscripts under review Dr. H. A. Garba has passion for research on Neglected Tropical Diseases (NTDs). He assumed the current position of Acting Head of Animal African Trypanosomiasis Research Department (AATRD), NITR on April 10, 2021.</p>
        //   <img src='assets/departments/11.jpg'/>

        //   `
        // }
    }
}
