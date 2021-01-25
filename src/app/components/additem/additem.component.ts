import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss'],
})
export class AdditemComponent implements OnInit {
  title: string = '';
  id: number = 0;
  price: number = 0;
  quantity: number = 0;
  constructor(private itemService: ItemService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    const item = new Item();
    item.id = this.id;
    item.title = this.title;
    item.price = this.price;
    item.quantity = this.quantity;
    item.completed = false;

    this.itemService.addItem(item).subscribe((i) => {
      this.router.navigate(['/']);
    });
  }
}
