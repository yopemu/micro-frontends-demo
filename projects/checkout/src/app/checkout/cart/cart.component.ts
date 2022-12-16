import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  removeFromCart(target: EventTarget): void {
    const event = new CustomEvent('checkout:remove_item', { bubbles: true });
    target.dispatchEvent(event);
  }
}
