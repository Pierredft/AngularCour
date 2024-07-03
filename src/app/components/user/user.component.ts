import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  nom:string = 'jhon';
  prenom:string = 'doe';
  age:number = 50;
  imgurl:string = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcStz5zmo40Deu_A9LKcSqCvoT7q_z4p448KCqHtC-hyLkb9Y62A";
  job: string = "";
}
