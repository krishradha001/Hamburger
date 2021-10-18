import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-addquestionare',
  templateUrl: './addquestionare.component.html',
  styleUrls: ['./addquestionare.component.css']
})
export class AddquestionareComponent implements OnInit {
viewfile1:any;
ctx:any;
baseUrl:any;
  panelOpenState = false;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.baseUrl= this.sanitizer.bypassSecurityTrustResourceUrl( "https://www.ngsurvey.com/s/MhNkOov_wk3HJtLKH_ka?embed=true&formonly=true") ;

    
  this.viewfile1 = document.getElementById('myChart4');
  this.ctx = this.viewfile1.getContext('2d');
  let myChart = new Chart(this.ctx, {
    type: 'bar',
    data: {
      labels: [
        "Windows",
        "Mac OS",
        "Linux",
        "Other",

      ],
      datasets: [{
        barThickness: 15,
        barPercentage: 1.5,
        label: "OS",
        data: [5, 9, 3, 6],
        backgroundColor: [

          'rgba(175, 192, 192, 0.2)',
          'rgba(453, 102, 255, 0.2)',
          'rgba(455, 159, 64, 0.2)'
        ],

        borderWidth: 1
      }]
    },
    options: {
      scales: {

        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Count'
          },


          ticks: {
            beginAtZero: true
          }
        }]
      }
    }


  });
}

}