import { Component, inject } from '@angular/core';
import { PublisherService } from 'src/app/services/publisher.service';

@Component({
  selector: 'app-button-clicker',
  standalone: true,
  imports: [],
  templateUrl: './button-clicker.component.html',
  styleUrl: './button-clicker.component.scss'
})
export class ButtonClickerComponent {
  publisherService = inject(PublisherService);

  increaseCounter(){
    this.publisherService.publishData("hello");
  }
}
