import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburgericon',
  templateUrl: './hamburgericon.component.html',
  styleUrls: ['./hamburgericon.component.css']
})
export class HamburgericonComponent implements OnInit {
  opened=false;
  constructor() { }

  ngOnInit(): void {
  }

}
