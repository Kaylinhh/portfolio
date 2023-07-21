import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  navList: { id: number, label: string, path?: string }[] = [
    { "id": 1, "label": "Accueil", "path": "/home" },
    { "id": 2, "label": "Projets", "path": "/projects" },
    { "id": 3, "label": "A propos", "path": "/about-me" },
    { "id": 4, "label": "Contact", "path": "/contact" }
  ];

  ngOnInit(): void {

  }
    
}
