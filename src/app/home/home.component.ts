import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  className: string = "opacity-0"
  classJob: string = "opacity-0"
  classButton: string = "opacity-0"

  ngAfterViewInit(): void {
  this.className = "flex justify-center mt-4 text-5xl transition-opacity ease-in duration-1000 delay-900 opacity-100"
  this.classJob = "flex justify-center mb-8 transition-opacity ease-in duration-1000 delay-900 opacity-100"
  this.classButton = "flex justify-center m-auto my-14 text-xl transition-opacity ease-in duration-1000 delay-1000 opacity-100"
  }


}
