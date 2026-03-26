import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
   standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})


export class HeaderComponent {
  scroll(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}