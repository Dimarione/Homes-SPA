import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.scss']
})

export class PropertyCardComponent {
  Property: any = {
    'Id': 1,
    'Type': 'House',
    'Price': 12000,
    'Name': 'My hose'
  }
}
