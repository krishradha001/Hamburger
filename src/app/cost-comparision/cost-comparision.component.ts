import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cost-comparision',
  templateUrl: './cost-comparision.component.html',
  styleUrls: ['./cost-comparision.component.css']
})
export class CostComparisionComponent implements OnInit {

  constructor() { }

  group:any = 'all';  
  ngOnInit(): void {
  }

}
