import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public route: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  checkIfItems() : boolean {
    return this.router.url.includes('item');
  }
  onSubmitItem(form: NgForm)
  {
    this.router.navigate(['item/search', encodeURIComponent(form.value.nav)]);
  }
}
