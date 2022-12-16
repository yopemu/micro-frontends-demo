import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  elements = new Array<number>(20);
  constructor() {
  }

  ngOnInit(): void {
  }

  addToCart(target: EventTarget): void {
    const event = new CustomEvent('products:add_item', { bubbles: true });
    target.dispatchEvent(event);
  }
}
