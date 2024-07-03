import { Component } from '@angular/core';
import { GenericAlertButtonComponent } from '../generic-alert-button/generic-alert-button.component';

@Component({
  selector: 'app-button-menu',
  standalone: true,
  imports: [GenericAlertButtonComponent],
  templateUrl: './button-menu.component.html',
  styleUrl: './button-menu.component.css'
})
export class ButtonMenuComponent {
  buttons: any[] = [
    {
      buttonTitle: "Philippe",
      AlertMessage: "Bonjour Philippe"
    },
    {
      buttonTitle: "Marco",
      AlertMessage: "Polo"
    },
    {
      buttonTitle: "Un pour Tuche!",
      AlertMessage: "Tuche pour un!"
    }
  ]
}
