import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

import { ManagementServicesService } from './management-services.service';
@Component({
  selector: 'app-management-dashboard',
  templateUrl: './management-dashboard.component.html',
  styleUrls: ['./management-dashboard.component.css']
})
export class ManagementDashboardComponent implements OnInit {
  id: any = 'overall';
  id1: any = 'remediation';
  taskdata: any;
  name: any = [];
  i: any;
  migration: any = [];
  requirement: any = [];
  dive: any = [];
  ctx: any;
  canvas: any;
  remdtrac: any;
  area: any = [];
  noapps: any = [];
  appremed: any = [];
  tbrtd: any = [];
  modern: any = [];
  areamodern: any = [];
  modernize: any = []
  retire: any = []
  rom: any = [];
  overal: any = [];
  maxvalue: number = 6;//for the max chart data to be shown
  constructor(private manageserv: ManagementServicesService) { }

  ngOnInit(): void {
    // this.taskdisp();
    // this.remediationtracker();
    // this.moderntracking();
    this.overall();
  }

  ontag1(ids: string) {
    this.id1 = ids;
    console.log(this.id1);
    this.taskdisp();
  }

  ontag(ids: string) {
    this.id = ids;
    console.log(this.id);
    this.remediationtracker();
    this.moderntracking();
    this.overall();
   
  }
  aftersave() {
    setTimeout(() => {
      this.taskdisp();

    }, 5000);
  }

  taskdisp() {
    this.manageserv.taskdispensation().subscribe(
      data => {
        this.taskdata = data;
        this.name.length = 0;
        this.migration.length = 0;
        this.requirement.length = 0;
        this.dive.length = 0;


        // let migration=data.map(res =>res.Name).subscribe (console.log);
        // console.log(this.migration);


        // for (let i = 0; i<this.taskdata.length; i++)
        for (let i = 0; i < this.maxvalue; i++) {
          // var newdata = Object.values(this.name);
          this.name.push(data[i].Name);
          this.migration.push(data[i].No_of_apps_fpr_migration);
          this.requirement.push(data[i].Meets_min_requirement);
          this.dive.push(data[i].Deep_dive_1);
          console.log(this.name);
          console.log(this.migration);
          console.log(this.requirement);
          console.log(this.dive);
        }

        this.canvas = <HTMLCanvasElement>document.getElementById('myChart2');
        this.ctx = this.canvas.getContext('2d');

        var myChart = new Chart(this.ctx, {
          type: 'horizontalBar',
          data: {
            labels: this.name,
            datasets: [
              {
                label: 'No. of Application',
                data: this.migration,
                backgroundColor: '#0197AC'
              },
              {
                label: 'Meets Min Requirement',
                data: this.requirement,
                backgroundColor: '#6DC9CA'
              },
              {
                label: 'Deep Dive 1',
                data: this.dive,
                backgroundColor: '#E6E6E6'
              }
            ]


          },


          options: {

            legend: {
              position: 'bottom',
            },

            scales: {
              xAxes: [{

              }],
              yAxes: [{

              }]
            }
          }

        })

      }
    );

  }


  remediationtracker() {
    this.manageserv.remedtrack().subscribe(
      data => {
        this.remdtrac = data;
        this.area.length = 0;
        this.noapps.length = 0;
        this.appremed.length = 0;
        this.tbrtd.lenght = 0;
        console.log(this.remdtrac);

        for (let i = 0; i < this.maxvalue; i++) {
          this.area.push(this.remdtrac[i].Area);
          this.noapps.push(this.remdtrac[i].no_of_apps);
          this.appremed.push(this.remdtrac[i].Apps_remediated);
          this.tbrtd.push(this.remdtrac[i].To_be_retired);
          console.log(this.noapps);
        }
        this.canvas = <HTMLCanvasElement>document.getElementById('myChart3');
        this.ctx = this.canvas.getContext('2d');

        var myChart = new Chart(this.ctx, {
          type: 'horizontalBar',
          data: {
            labels: this.area,
            datasets: [
              {
                label: 'No. of Applications',
                data: this.noapps,
                backgroundColor: '#0197AC'
              },
              {
                label: 'Apps Remediated',
                data: this.appremed,
                backgroundColor: '#6DC9CA'
              },
              {
                label: 'Retired',
                data: this.tbrtd,
                backgroundColor: '#E6E6E6'
              }
            ]


          },


          options: {

            legend: {
              position: 'bottom',
            },

            scales: {
              xAxes: [{

              }],
              yAxes: [{

              }]
            }
          }

        })


      }
    );
  }
  moderntracking() {
    this.manageserv.moderntrack().subscribe(
      data => {
        this.modern = data;
        console.log(this.modern);
        this.areamodern.length = 0;
        this.modernize.length = 0;
        this.retire.length = 0;
        this.rom.length = 0;
        for (let k = 0; k < this.maxvalue; k++) {
          this.areamodern.push(this.modern[k].Area);
          this.modernize.push(this.modern[k].Modernize);
          this.retire.push(this.modern[k].Retire);
          this.rom.push(this.modern[k].Ready_for_migration);
          console.log(this.modernize);
        }
        this.canvas = <HTMLCanvasElement>document.getElementById('myChart4');
        this.ctx = this.canvas.getContext('2d');

        var myChart = new Chart(this.ctx, {
          type: 'horizontalBar',
          data: {
            labels: this.areamodern,
            datasets: [
              {
                label: 'Modernize',
                data: this.modernize,
                backgroundColor: '#0197AC'
              },
              {
                label: 'Retire',
                data: this.retire,
                backgroundColor: '#6DC9CA'
              },
              {
                label: 'Ready For Migration',
                data: this.rom,
                backgroundColor: '#E6E6E6'
              }
            ]


          },


          options: {

            legend: {
              position: 'bottom',
            },

            scales: {
              xAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }

        })


      }
    );
  }
  overall() {
    this.overal=["Module-01", "Module-02"]
    this.canvas = <HTMLCanvasElement>document.getElementById('myChart1');
    this.ctx = this.canvas.getContext('2d');

    var myChart = new Chart(this.ctx, {
      type: 'horizontalBar',
      data: {
        labels: this.overal,
        datasets: [
          {
            label: 'Estimated',
            data: [15,20],
            backgroundColor: '#0197AC'
          },
          {
            label: 'Completed',
            data: [20,10],
            backgroundColor: '#6DC9CA'
          }
         
        ]


      },


      options: {

        legend: {
          position: 'bottom',
        },

        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    })


  }


  }




