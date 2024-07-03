import { Component } from '@angular/core';

@Component({
  selector: 'app-magie',
  standalone: true,
  imports: [],
  templateUrl: './magie.component.html',
  styleUrl: './magie.component.css'
})
export class MagieComponent {
hidden: boolean = true;

toogle(){
  this.hidden = !this.hidden;
}
}
