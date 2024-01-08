import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonClickerComponent } from '../button-clicker/button-clicker.component';
import { ButtonClickerCounterComponent } from '../button-clicker-counter/button-clicker-counter.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonClickerComponent, ButtonClickerCounterComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
