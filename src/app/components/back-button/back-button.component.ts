import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';

@Component({
  selector: 'back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }
  returnToPrior(): void {
    this._location.back();
  }
}
