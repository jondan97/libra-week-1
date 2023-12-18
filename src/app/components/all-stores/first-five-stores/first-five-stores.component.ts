import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
import { Store } from 'src/app/interfaces/store';

@Component({
  selector: 'app-first-five-stores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-five-stores.component.html',
  styleUrl: './first-five-stores.component.scss'
})
export class FirstFiveStoresComponent {
  @Input() firstFiveStores: Store[] = [];
  @Output() actionEventEmitter = new EventEmitter();


  ngOnInit(){
    //console.log(this.firstFiveStores);
    console.log("first five stores init");
  }

  ngOnChanges(changes: SimpleChange){
    if(this.firstFiveStores.length !== 0){
      let firstFiveStoresCustom = this.firstFiveStores.slice(0, 5);
      this.firstFiveStores = firstFiveStoresCustom;
    }
  }

  ngOnDestroy(){
    console.log("first five stores destroyed");
  }

  storeClicked(store: Store){
    this.actionEventEmitter.emit(store);
  }
}
