import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { threadId } from 'worker_threads';
import { ManagementServicesService } from '../management-services.service';

@Component({
  selector: 'app-managementdataspecific',
  templateUrl: './managementdataspecific.component.html',
  styleUrls: ['./managementdataspecific.component.css']
})
export class ManagementdataspecificComponent implements OnInit {
  id: any ='health';
  progres: any;
  taskname: any = [];
  taskname1: any = [];
  taskname2: any = [];
  esttime: any = [];
  acttime: any = [];
  perc: any = [];
  canvas: any;
  ctx: any;
  task: any
  j: any;
  issue: any;
  totissue: any = [];
  totlow: any = [];
  tothigh: any = [];
  totmedium: any = [];
  maxvalue: number = 6;//for the max chart data to be shown
  time: any;
  bolprogress: boolean;
  bolhealth: boolean;
  constructor(private manageserv: ManagementServicesService) { }

  ngOnInit(): void {
  this.times();
   
  }
  ontag(ids: string) {
    this.id = ids;
    console.log(this.id);
    if (ids == 'health') {
       this.times();
    }
    else if (ids == 'task_progress') {
      this.progress(this.id);
    }

    else if (ids == 'task_details') {
      this.tasks(this.id);

    }
    else if (ids == 'issues') {
      this.issues(this.id)


    }


  }
  pti(id) {
    this.manageserv.ptidata(id).subscribe(
      data => {

        let file = data;
        console.log(file);



      }
    );
  }
  times()
  {

    this.manageserv.time().subscribe(
      data => {

        this.time= data;
        console.log(this.time);



      }
    );
    }


  progress(id) {

    this.manageserv.ptidata(id).subscribe(
      data => {

        this.progres = data;
        console.log(this.progres);

        this.taskname.length = 0;
        this.esttime.length = 0;
        this.acttime.length = 0;
        if (this.progres.length >= this.maxvalue) {
          this.maxvalue = this.maxvalue;
        }
        else {
          this.maxvalue = this.progres.length;
        }
        for (let p = 0; p < this.maxvalue; p++) {
          console.log(data[p]?.Task_name);
          this.taskname.push(data[p]?.Task_name);
          this.esttime.push(data[p]?.Estimated_time);
          this.acttime.push(data[p]?.Actual_time);
          console.log(this.taskname);
          console.log(this.esttime);
          console.log(this.acttime);
        }


        console.log(this.taskname);
        console.log(this.esttime);
        console.log(this.acttime);
        if (document.getElementById('mytask')) {
          this.canvas = <HTMLCanvasElement>document.getElementById('mytask');
          this.ctx = this.canvas?.getContext('2d');
          console.log(this.acttime);

          var myChart = new Chart(this.ctx, {
            type: 'bar',
            data: {
              labels: this.taskname,
              datasets: [{
                label: "Estimated Time",
                type: "bar",
                backgroundColor: "#865CB2",
                data: this.esttime,
              }, {
                label: "Actual Time",
                type: "bar",
                backgroundColor: "#FF57AA",
                data: this.acttime,
              }
              ]
            },
            options: {
              title: {
                display: true,

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
              },
              legend: { display: true }
            }
          });
        }
      }
    );
  }
  tasks(id) {

    this.manageserv.ptidata(id).subscribe(
      data => {

        this.task = data;
        console.log(this.task);
        this.taskname1.length = 0;
        this.perc.length = 0;




        if (this.task.length >= this.maxvalue) {
          this.maxvalue = this.maxvalue;
        }
        else {
          this.maxvalue = this.task.length;
        }
        for (let j = 0; j < this.maxvalue; j++) {
          console.log(data[j]?.Task_name);
          this.taskname1.push(data[j]?.Task_name);
          this.perc.push(data[j]?.percent);
          console.log(this.perc);

        }


        if (document.getElementById('mydetail')) {
          this.canvas = <HTMLCanvasElement>document.getElementById('mydetail');
          this.ctx = this.canvas.getContext('2d');
          var myChart = new Chart(this.ctx, {
            type: 'bar',
            data: {
              labels: this.taskname1,
              datasets: [
                {
                  label: "Percent",
                  backgroundColor: ["#3e95cd", "#8e5ea2"],
                  data: this.perc,
                }
              ]
            },

            options: {
              title: {


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
              },
              // legend: { display: true }
            }
          });
        }
      }
    );
  }

  issues(id) {

    this.manageserv.ptidata(id).subscribe(
      data => {

        this.issue = data;
        console.log(this.issue.length);

        this.taskname2.length = 0;
        this.totissue.length = 0;
        this.totlow.length = 0;
        this.totmedium.length = 0;
        this.tothigh.length = 0;

        if (parseInt(this.issue.length) >= this.maxvalue) {
          this.maxvalue = this.maxvalue;
          console.log(this.issue.length + ' one ' + this.maxvalue);
        }
        else {
          this.maxvalue = this.issue.length;
          console.log(this.issue.length + ' 2 ');
        }
        for (let k = 0; k < this.maxvalue; k++) {
          console.log(data[k]?.Task_name);
          this.taskname2.push(data[k]?.Task_name);
          this.totlow.push(data[k]?.total_low);
          this.totmedium.push(data[k]?.total_medium);
          this.tothigh.push(data[k]?.total_high);
          console.log(this.tothigh);

        }


        if (document.getElementById('myissues')) {
          this.canvas = <HTMLCanvasElement>document.getElementById('myissues');
          this.ctx = this.canvas.getContext('2d');
          var myChart = new Chart(this.ctx, {
            type: 'bar',
            data: {
              labels: this.taskname2,
              datasets: [
                {
                  label: 'Low',
                  data: this.totlow,
                  backgroundColor: '#959595' // green
                },
                {
                  label: 'Medium',
                  data: this.totmedium,
                  backgroundColor: '#E3D56C' // yellow
                },
                {
                  label: 'High',
                  data: this.tothigh,
                  backgroundColor: '#BC7366' // red
                }
              ]
            },

            options: {
              title: {
                display: true,

              },
              scales: {
                xAxes: [{
                  stacked: true,
                  ticks: {
                    beginAtZero: true
                  }
                }],
                yAxes: [{
                  stacked: true,
                  ticks: {
                    beginAtZero: true
                  }
                }]
              },
              legend: { display: true }
            }
          });
        }
      }
    );
  }
}