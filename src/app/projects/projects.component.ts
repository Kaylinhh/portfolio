import { Component } from '@angular/core';
import { Project } from '../shared/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projectList: Project[] = [
    {name: "Table Tap", img: "", description: ""},
    {name: "Shake it!", img: "", description: ""},
  ];
}
