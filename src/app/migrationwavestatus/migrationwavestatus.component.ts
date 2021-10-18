import { Component, OnInit, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import * as Chart from 'chart.js';
import { MigrationwaveService } from './migrationwave.service';

@Component({
  selector: 'app-migrationwavestatus',
  templateUrl: './migrationwavestatus.component.html',
  styleUrls: ['./migrationwavestatus.component.css']
})
export class MigrationwavestatusComponent implements OnInit {
dropwave:any;
dropdownval:String="all";
waveid:any;
waveappid:any;
i:any;
id:any;
  waveid1: any;
  jsondata: any[];
  chart =[];  
  piedata:any=[];
  piedata1:any=[];
  piedata2:any=[];
  ctx:any;
  mig:any;
  wavedev:any;
  appsel:any;
  appid:any;
  appdev:any;
  doudata:any;
  doudata1:any;
  doudata2:any;
  resource:any;
  devicestat:any;
  devicestat1:any;
  devicestat2:any;
  appstatus:any;
  appstatus1:any;
  appstatus2:any;
  softwarestatus:any;
  softwarestatus1:any;
  softwarestatus2:any;
  servicestatus:any;
  servicestatus1:any;
  servicestatus2:any;
  migratewave:any
  wavestat:any
  wavestat1:any
  wavestat2:any
  groupstat:any;
  groupstat1:any;
  groupstat2:any;
  appidname:any;
  
  constructor(private migrationserv: MigrationwaveService) { }
 
  ngOnInit(): void {
    this.dropdownwave();
    console.log(this.dropdownval);
    this.waveiddrop(this.dropdownval);
    this.waveappiddrop(this.i,this.id);
    this.applicationselect();
   this.resourcemigselect();
  this.migrationwave();
   
  }
dropdownwave(){
this.migrationserv.waveselect().subscribe(
  data => {
    this.dropwave = data;   
   
    console.log(this.dropwave);  
  }
  );
}
waveiddrop(val:any){
  console.log(val);
  this.migrationserv.waveidselect(val).subscribe(
    data => {
      this.waveid = data;     
  
      console.log(this.waveid);  
      console.log(this.mig);  
    }

    );
  }
  waveappiddrop(i,id){
  
    
    this.migrationserv.waveappidselect(i,id).subscribe(
      data => {
        this.waveappid = data; 
        this.wavedev=data[0].dev_data;
        this.piedata=data[0].in_progress_percent;
        this.piedata1=data[0].completed_percent;
        this.piedata2=data[0].error_percent;
        console.log(this.piedata);  
        console.log(this.piedata1);  
        console.log(this.piedata2);  
        console.log(this.wavedev);
        const canvas = <HTMLCanvasElement> document.getElementById('myChart');
        const ctx = canvas.getContext('2d');
          
            var myChart = new Chart(ctx, {
              type: 'pie',
              data: {
                  labels: ['In progress percent', 'Completed percent', 'Error Percent'],
                  datasets: [{
                      label: '# of Votes',
                      data: [this.piedata, this.piedata1, this.piedata2],
                    
                      backgroundColor: [
                          '#FC6A59',
                          '#14A0C0',
                          '#5059AB',
                        
                      ],
                      // borderColor: [
                      //     'rgba(255, 99, 132, 1)',
                      //     'rgba(54, 162, 235, 1)',
                      //     'rgba(255, 206, 86, 1)',
                      //     'rgba(75, 192, 192, 1)',
                      //     'rgba(153, 102, 255, 1)',
                      //     'rgba(255, 159, 64, 1)'
                      // ],
                      // borderWidth: 1
                  }]
                 
                  
              },
              options: {
                legend:{
                  position:'bottom',
                 },
                  scales: {
                  
                  }
              }
              
          });
        
      }
      );
    }
    
  applicationselect(){
      this.migrationserv.appselect().subscribe(
        data => {
          this.appsel = data;     
          console.log(this.appsel);  

        }
        );
      }
      applicationidselect(i){
  
    console.log(i)
        this.migrationserv.appidselect(i).subscribe(
          data => {
            this.appid = data; 
            this.appdev=data[0].dev_data;
            this.doudata=data[0].in_progress_percent;
            this.doudata1=data[0].completed_percent;
            this.doudata2=data[0].error_percent;
            this.appidname=data[0].name;
            console.log(this.appid);
            console.log(i)
           
            const canvas = <HTMLCanvasElement> document.getElementById('myChart2');
            const ctx = canvas.getContext('2d');
              
                var myChart = new Chart(ctx, {
                  type: 'doughnut',
                  data: {
                      labels: ['In progress percent', 'Completed percent', 'Error Percent'],
                      datasets: [{
                          label: '# of Votes',
                          data: [this.doudata, this.doudata1, this.doudata2],
                        
                          backgroundColor: [
                            '#FC6A59',
                            '#14A0C0',
                            '#5059AB'
                          ],
                       
                          borderWidth: 1
                      }]
                     
                      
                  },
                  
                  options: {
                    legend:{
                      position:'bottom',
                     },
                      scales: {
                      
                      }
                  }
                  
              });
            
          }
          );
        }
        resourcemigselect(){
          this.migrationserv.resourcemigrationselect().subscribe(
            data => {
              this.resource = data;  
              this.devicestat=data[0].Device_status.started_count;     
              this.devicestat1=data[0].Device_status.migration_planned_count;   
              this.devicestat2=data[0].Device_status.non_migrating_count;   
              this.appstatus=data[0].Application_status.started_count; 
              this.appstatus1=data[0].Application_status.migration_planned_count;  
              this.appstatus2=data[0].Application_status.non_migrating_count; 
              this.softwarestatus=data[0].Software_status.started_count; 
              this.softwarestatus1=data[0].Software_status.migration_planned_count; 
              this.softwarestatus2=data[0].Software_status.non_migrating_count; 
              this.servicestatus=data[0].Service_status.started_count; 
              this.servicestatus1=data[0].Service_status.migration_planned_count; ; 
              this.servicestatus2=data[0].Service_status.non_migrating_count; 
              
              
              console.log(this.resource);  
              console.log(this.devicestat); 
              console.log(this.devicestat1); 
              console.log(this.devicestat2); 
              console.log(this.appstatus); 
              const canvas = <HTMLCanvasElement> document.getElementById('myChart3');
            const ctx = canvas.getContext('2d');
              
                var myChart = new Chart(ctx, {
                  type: 'horizontalBar',
                  data: {
                      labels: ['Device', 'Application', 'Software', 'Service'],

                      datasets: [
                        {
                          label: 'Completed',
                          data: [this.devicestat,  this.appstatus, this.softwarestatus, this.servicestatus],
                          backgroundColor: '#0197AC'
                        },
                        {
                          label: 'In Progress',
                          data: [this.devicestat1,  this.appstatus1, this.softwarestatus1, this.servicestatus1],
                          backgroundColor: '#6DC9CA'
                        },
                        {
                          label: 'Remaining',
                          data: [this.devicestat2,  this.appstatus2, this.softwarestatus2, this.servicestatus2],
                          backgroundColor: '#E6E6E6' 
                        }
                      ]


                  
                      
                  },
                  options: {
                    legend:{
                     position:'bottom',
                    },
                    
                      scales: {
            xAxes:[{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
                  }
                  
              });
            }
            );
            
          }  

          migrationwave(){
            this.migrationserv.getmigrationwave().subscribe(
              data => {
                this.migratewave = data;  
                this.wavestat=data[0].Wave_status.started_count;     
                this.wavestat1=data[0].Wave_status.migration_planned_count;   
                this.wavestat2=data[0].Wave_status.not_started_count;   
                this.groupstat=data[0].Group_status.started_count; 
                this.groupstat1=data[0].Group_status.in_progress_count;  
                this.groupstat2=data[0].Group_status.not_started_count; 
                
                
                
              
                const canvas = <HTMLCanvasElement> document.getElementById('myChart4');
              const ctx = canvas.getContext('2d');
                
                  var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Wave', 'Group'],
  
                        datasets: [
                          {
                            label: 'Completed',
                            data: [this.wavestat,  this.groupstat],
                            backgroundColor: '#58F1D4' 
                          },
                          {
                            label: 'In Progress',
                            data:[this.wavestat1,  this.groupstat1],
                            backgroundColor: '#19C9EA' 
                          },
                          {
                            label: 'Remaining',
                            data: [this.wavestat2,  this.groupstat2],
                            backgroundColor: '#EAEBF4' 
                          }
                        ]
  
  
                    
                        
                    },
                    options: {
                      legend:{
                       position:'bottom',
                      },
                      
                        scales: {
              xAxes:[{
                  stacked: true
              }],
              yAxes: [{
                  stacked: true
              }]
          }
                    }
                    
                });
              }
              );
              
            }  
}
