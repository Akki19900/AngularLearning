import { Component } from '@angular/core';

@Component({
  selector: 'app-country-list',
  template: ` <h1 class="country">country-list works!</h1> `,
  styles: [
    `
      .country {
        color: red;
      }
    `,
  ],
})
export class CountryListComponent {}
