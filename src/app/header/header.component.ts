import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  navList: { id: number, label: string, icon: string, path?: string }[] = [
    { "id": 1, "label": "Home", "icon":"../assets/home.svg", "path": "/home" },
    { "id": 2, "label": "Projects", "icon": "", "path": "/projects" },
    { "id": 3, "label": "About me", "icon": "", "path": "/about-me" },
    { "id": 4, "label": "Contact", "icon": "", "path": "/contact" },
  ];

  ngOnInit(): void {

  }
    
}
