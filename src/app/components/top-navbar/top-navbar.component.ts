import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  links = [
    {'name': 'Home', 'url': '/', 'isActive': 'active', 'children': []},
    {'name': 'About', 'url': '/about', 'isActive': 'inactive', 'children': []},
    {'name': 'Departments', 'url': '/departments', 'isActive': 'inactive', 'children': [
      {'name': 'IT', 'url': '/departments/it', 'isActive': 'inactive'},
    ]},
    {'name': 'News', 'url': '/news', 'isActive': 'inactive', 'children': []},
  ];

  constructor() { }

  activateLink(url: string) {
    this.links.forEach(link => {
      if (link.url === url) {
        link.isActive = 'active';
      } else { link.isActive = 'inactive'; }
    });
  }

  ngOnInit(): void {
  }

}
