import { getManifest } from '@angular-architects/module-federation';
import { Component, Inject, OnInit } from '@angular/core';
import { CustomManifest, CustomRemoteConfig } from '../util/remote-config';
import { buildRoutes } from '../util/routes';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  remotes: CustomRemoteConfig[] = [];
  cartItemCounter = 0;

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
  }

  async ngOnInit() {
    this.initRoutes();
    this.checkoutAddItem();
    this.catalogAddItem();
  }

  private initRoutes() {
    const manifest = getManifest<CustomManifest>();

    // Hint: Move this to an APP_INITIALIZER
    //  to avoid issues with deep linking
    const routes = buildRoutes(manifest);
    this.router.resetConfig(routes);

    this.remotes = Object.values(manifest);
  }

  private checkoutAddItem() {
    this.document.addEventListener('checkout:remove_item', () => {
      this.cartItemCounter--;
      this.cartItemCounter = Math.max(this.cartItemCounter,0);
      console.log('checkout:remove_item: ', this.cartItemCounter);
    });
  }

  private catalogAddItem() {
    this.document.addEventListener('products:add_item', () => {
      this.cartItemCounter++;
      console.log('products:add_item: ', this.cartItemCounter);
    });
  }
}
