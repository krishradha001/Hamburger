import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { UploadService } from '../upload.service';
import { MigrateService } from '../services/migrate.service';
import { saveAs } from 'file-saver';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-viewquestionare',
  templateUrl: './viewquestionare.component.html',
  styleUrls: ['./viewquestionare.component.css']
})
export class ViewquestionareComponent implements OnInit {
  panelOpenState = false;
  constructor(private route: ActivatedRoute, private uploadService: UploadService, private migrateSer: MigrateService) { }

  id: any;
  i: any;
  viewfile: any;
  graph: any;
  viewfile1: any;
  viewfile2: any;
  file: any;
  ctx: any


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.i = this.route.snapshot.params['i'];
    this.viewdetails(this.id, this.i);
    this.existinginfrastructure(this.id, this.i);

  }

  viewdetails(id, i): void {

    console.log(id);
    console.log(i);
    this.uploadService.viewdetails(id, i).subscribe(
      data => {
        this.viewfile = data;
        console.log(this.viewfile);

      }
    );
  }
  existinginfrastructure(id, i) {
    this.uploadService.viewdetails(id, i).subscribe(
      data => {

        this.viewfile1 = data[0].exsiting_environment[3];
        this.viewfile2 = data[0].exsiting_environment[5];
        console.log(this.viewfile);
        console.log(this.viewfile1);
        console.log(this.viewfile2);




        this.viewfile1 = document.getElementById('myChart4');
        this.ctx = this.viewfile1.getContext('2d');
        let myChart = new Chart(this.ctx, {
          type: 'bar',
          data: {
            labels: [
              "Windows Server 2008 R2",
              "IBM I 7.1",
              "Linux 6.7",

            ],
            datasets: [{
              barThickness: 15,
              barPercentage: 1.5,
              label: "OS",
              data: [12, 7, 12],
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
    );
  }
  viewdownloadquestion(id, i) {

    console.log(id);
    console.log(i);
    this.uploadService.viewdownloadquestion(id, i).subscribe(
      data => {

        saveAs(new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }), id);

      })

  }

}
