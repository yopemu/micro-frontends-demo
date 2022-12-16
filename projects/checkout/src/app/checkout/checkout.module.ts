import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: '',
    redirectTo: 'cart',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    CartComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),

        MatButtonModule
    ]
})
export class CheckoutModule { }
