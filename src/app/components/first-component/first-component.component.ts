import { Component } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

import { Items } from 'src/app/Items';
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

  items: Items[] = [];

  constructor(private listService: ListService){
    this.getAll();
  };

  getAll(): void {
    this.listService.getTransactions().subscribe((data) => {
      console.log(data);
      this.items = data;
    });
    
  }

  deleteTest(item: string): void{
    console.log(item);
    this.listService.deleteUser(item).subscribe();
    location.reload();
  }
}
