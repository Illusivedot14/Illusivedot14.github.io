import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  ngOnInit(): void {
    // this.redirectToActualTWRPG();
  }

  redirectToActualTWRPG(): void {
    document.location.href = 'https://sfarmani.github.io/';
  }
}
