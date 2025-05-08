import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-balance-display',
  templateUrl: './balance-display.component.html',
  styleUrls: ['./balance-display.component.css'],
  imports: [CommonModule],
})
export class BalanceDisplayComponent {
  visible: boolean = false;
  balance: number = 10.0;

  toggleView() {
    this.visible = !this.visible;
  }
}
