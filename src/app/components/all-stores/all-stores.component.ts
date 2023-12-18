import { Component, inject } from '@angular/core';
import { Store } from 'src/app/interfaces/store';
import { StoreService } from 'src/app/services/store.service';
import { FirstFiveStoresComponent } from './first-five-stores/first-five-stores.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-stores',
  standalone: true,
  imports: [CommonModule, FirstFiveStoresComponent],
  templateUrl: './all-stores.component.html',
  styleUrl: './all-stores.component.scss'
})
export class AllStoresComponent {
  storeService: StoreService = inject(StoreService);
  stores: Store[] = [];
  selectedStore?: Store;
  hasClicked = false;

  ngOnInit() {
    console.log("all stores init");
    this.storeService.getStores() // asynchronously
    .subscribe({
      next: data => {
          this.stores = data;
          console.log("data loaded");
      }
    })
    console.log("end of all stores init");
  }

  selectStore(store: Store){
    this.selectedStore = store;
  }
}
