import { Component, inject } from '@angular/core';
import { PublisherService } from 'src/app/services/publisher.service';

@Component({
  selector: 'app-button-clicker-counter',
  standalone: true,
  imports: [],
  templateUrl: './button-clicker-counter.component.html',
  styleUrl: './button-clicker-counter.component.scss'
})
export class ButtonClickerCounterComponent {
  publisherService = inject(PublisherService);
  counter = 0;

  constructor(){
    this.publisherService.listenForData()
    .subscribe((data) => {
      this.increaseCounter();
    })
  }

  increaseCounter(){
    this.counter++; // counter = counter + 1
  }
}
