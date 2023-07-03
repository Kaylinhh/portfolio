import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  className: string = "opacity-0"

  ngAfterViewInit(): void {
    this.className = "flex justify-center my-24 transition-opacity ease-in duration-1000 delay-800 opacity-100"
  }


}
