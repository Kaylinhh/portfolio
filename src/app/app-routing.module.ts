import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "about-me", component: AboutMeComponent },
  { path: "contact", component: ContactComponent },
  { path: "", component: HomeComponent },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
