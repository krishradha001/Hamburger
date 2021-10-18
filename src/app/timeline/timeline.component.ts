import { ConnectedPositionStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Console } from 'console';
import { MigrateService } from '../services/migrate.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  fromDate:any;
  toDate:any;
  dateDiff:any;
  weekText:string = 'Week';
  weekCounter:number = 1;
  waveList:any = [];
  taskList:any =[];
  nullDatesMsg:string = 'Migration Date Not Set';
  startDateOutOfTimelineMsg:string;
  endDateOutOfTimelineMsg:string;
  progressDispVal:string;
  tblCellWidth:number= 50;

  constructor(private migrateSer:MigrateService, private formBuilder: FormBuilder) {}


  ngOnInit(): void {

    this.setDefaultTime();

    this.getTimeline();
    this.progressDispVal = '';
    // this.fromDate = '2021-01-01';
    // this.toDate = '2021-02-11';
    

    this.waveList = [
      {parent:'MW01', child:['MW01-01','MW01-02', 'MW01-03', 'MW01-04', 'MW01-05']},
      {parent:'MW02', child:['MW02-01','MW02-02', 'MW02-03', 'MW02-04', 'MW02-05']},
      {parent:'MW03', child:['MW03-01','MW03-02', 'MW03-03', 'MW03-04', 'MW03-05']},
      {parent:'MW04', child:[]}      
    ];

    this.taskList = 
    [
      {
          "wave_id": "MW-001",
          "group_data": [
              {
                  "mgroup_id": "MG101",
                  "group_start_date": null,
                  "group_end_date": null,
                  "status": "Running",
                  "status_From_Date": null
              },
              {
                  "mgroup_id": "MG1027",
                  "group_start_date": "05-01-2021",
                  "group_end_date": "06-01-2021",
                  "status":"Error",
                  "status_From_Date": "05-21-2021"
              }
          ]
      },
      {
          "wave_id": "MW-002",
          "group_data": [
              {
                  "mgroup_id": "MG1021",
                  "group_start_date": null,
                  "group_end_date": null,
                  "status":null,
                  "status_From_Date":null
              },
              {
                  "mgroup_id": "MG104",
                  "group_start_date": "12-02-2020",
                  "group_end_date": "02-21-2021",
                  "status":"Running",
                  "status_From_Date": null
              },
              {
                  "mgroup_id": "MG1025",
                  "group_start_date": "12-02-2020",
                  "group_end_date": "01-02-2021",
                  "status":"Running",
                  "status_From_Date": null
              },
              {
                  "mgroup_id": "MG1026",
                  "group_start_date": "02-01-2021",
                  "group_end_date": "02-21-2021",
                  "status":"Running",
                  "status_From_Date": null
              }
          ]
      },
      {
          "wave_id": "MW-003",
          "group_data": [
              {
                  "mgroup_id": "MG105",
                  "group_start_date": "01-01-2021",
                  "group_end_date": "01-01-2021",
                  "status":"Running",
                  "status_From_Date": null
              }
          ]
      },
      {
          "wave_id": "MW-004",
          "group_data": [
              {
                  "mgroup_id": "MG104",
                  "group_start_date": null,
                  "group_end_date": null,
                  "status":"Running",
                  "status_From_Date": null
              }
          ]
      }
  ]
    
    this.getDates();
  }

  setDefaultTime(){
    let currentDate: Date = new Date();  
    
    let previousMonthDate: Date = new Date();
    let nextMonthDate: Date = new Date();  
    
    currentDate.setHours(0,0,0,0);
    previousMonthDate.setDate(currentDate.getDate() - 30);
    previousMonthDate.setHours(0,0,0,0);
    nextMonthDate.setDate(currentDate.getDate() + 30);
    nextMonthDate.setHours(0,0,0,0);

    this.fromDate = previousMonthDate.getFullYear() + '-' + ("0" + (previousMonthDate.getMonth() + 1)).slice(-2) +'-'+ ("0" + previousMonthDate.getDate()).slice(-2);
    
    this.toDate = nextMonthDate.getFullYear() + '-' + ("0" + (nextMonthDate.getMonth() + 1)).slice(-2) +'-'+ ("0" + nextMonthDate.getDate()).slice(-2);

    this.dateDiff = this.getDatesBetweenDates(previousMonthDate, nextMonthDate);
  }

  getProgStatusInFulDate(statusDate:Date){
    return ("0" + statusDate.getDate()).slice(-2) +'-'+ ("0" + (statusDate.getMonth() + 1)).slice(-2) + '-' + statusDate.getFullYear();
  }

  getMinDate(){
    let selectedFromDate =  new Date(this.fromDate);
    let minDateRange = new Date();
    selectedFromDate.setHours(0,0,0,0);
    minDateRange.setDate(selectedFromDate.getDate() + 15);
    // console.log(minDateRange.getFullYear() + '-' + ("0" + (minDateRange.getMonth() + 1)).slice(-2) +'-'+ ("0" + minDateRange.getDate()).slice(-2));
    return minDateRange.getFullYear() + '-' + ("0" + (minDateRange.getMonth() + 1)).slice(-2) +'-'+ ("0" + minDateRange.getDate()).slice(-2);
  }

  getTimeline(){
    this.migrateSer.migrationTimeline().subscribe(
      data => {
        this.taskList = data;
        this.taskList.forEach(element => {
          // console.log(element.group_data.length);
        });
      }
    )
  }

  getProgressRunning(submg,d){
    // console.log(submg);
    // console.log(d);
  }

  getProgressError(submg, d){
    let startDate = new Date(submg.group_start_date);
    let endDate = new Date(submg.group_end_date);
    let errorDate = new Date(submg.status_From_Date);
    let currentDate = new Date();
    currentDate.setHours(0,0,0,0);
    errorDate.setHours(0,0,0,0);

    let subDifference_In_Time = currentDate.getTime() - errorDate.getTime();
    let subdifference_In_Days = subDifference_In_Time / (1000 * 3600 * 24);    
    // console.log(subdifference_In_Days);
    return (subdifference_In_Days+1)*50;

  }

  checkError(submg, d){
    let errorStartDate = new Date(submg.status_From_Date);
    errorStartDate.setHours(0,0,0,0);

    let currentDate = new Date(d);
    currentDate.setHours(0,0,0,0);

    if(errorStartDate <= currentDate){
      return true;
    }

  }

  checkBeforeError(submg, d){
    let errorStartDate = new Date(submg.status_From_Date);
    errorStartDate.setHours(0,0,0,0);

    let currentDate = new Date(d);
    currentDate.setHours(0,0,0,0);

    // console.log(errorStartDate);
    // console.log(currentDate);

    if(errorStartDate > currentDate){
      return true;
    }

  }

  checkProgressBeforeError(submg, d){
    let startDate = new Date(submg.group_start_date);
    let endDate = new Date(submg.group_end_date);
    let errorDate = new Date(submg.status_From_Date);
    let currentDate = new Date();
    currentDate.setHours(0,0,0,0);
    errorDate.setHours(0,0,0,0);
    startDate.setHours(0,0,0,0);

    let subDifference_In_Time = errorDate.getTime() - startDate.getTime();
    let subdifference_In_Days = subDifference_In_Time / (1000 * 3600 * 24);    
    
    return (subdifference_In_Days+1)*50;

  }

  gettask(task){
    return task.wave_id;
  }

  getDate(task, d){
    let startDate = new Date(task.group_start_date);
    let endDate = new Date(task.group_end_date);
    let start_Date = new Date(d);
    let fromDate = new Date(this.fromDate);

    let currentDate = new Date();

    let errorStartDate = new Date(task.status_From_Date);
    errorStartDate.setHours(0,0,0,0);

    start_Date.setHours(0,0,0,0);
    endDate.setHours(0,0,0,0);
    currentDate.setHours(0,0,0,0);


    if(task.group_start_date == null && task.group_end_date == null){
      return false;
    }else{
      
     if((task.status == 'Error') ){
          if( (start_Date.getFullYear() == errorStartDate.getFullYear()) && (start_Date.getMonth() == errorStartDate.getMonth()) && (start_Date.getDate() == errorStartDate.getDate())){
            return true;
          }
      }

      if( (start_Date.getFullYear() == startDate.getFullYear()) && (start_Date.getMonth() == startDate.getMonth()) && (start_Date.getDate() == startDate.getDate())){
        return true;
      }
  
      if( (start_Date.getFullYear() == fromDate.getFullYear()) && (start_Date.getMonth() == fromDate.getMonth()) && (start_Date.getDate() == fromDate.getDate())){
        
        if((startDate < start_Date && fromDate < endDate)){
          return true;
        }
      }

    }
    
  }

  nullDate(task, d){
    // console.log(task);
    let startDate = task.group_start_date;
    let endDate = task.group_end_date;

    let start_Date = new Date(d);
    
    if(startDate === endDate === null){
      return true;
    }
    
  }

  checkNullDate(task){
      // console.log(task.group_end_date);
    if((task.group_start_date == null) && (task.group_end_date == null)){   
      return true;
    }else{
      return false;
    }
  }

  getNullStyle(task){
    return 200;
  }

  getStyle(task, d){
    
    let startDate = new Date(task.group_start_date);
    let endDate = new Date(task.group_end_date);

    let fromDate = new Date(this.fromDate);
    let toDate = new Date(this.toDate);

    let timelineDate = new Date(d);
    timelineDate.setHours(0,0,0,0);
    fromDate.setHours(0,0,0,0);
    toDate.setHours(0,0,0,0);

    if((endDate > toDate) && (startDate < fromDate)){
      let Difference_In_Time = toDate.getTime() - fromDate.getTime();
      let difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      console.log(difference_In_Days);
      console.log(task.mgroup_id)
      this.progressDispVal =  "Started: "+ this.getProgStatusInFulDate(startDate) + " Ending: " + this.getProgStatusInFulDate(endDate);
      return (difference_In_Days+1)*50;
    }
    else
    if((endDate < toDate) && (startDate < fromDate)){
      let subDifference_In_Time = endDate.getTime() - fromDate.getTime();
      let subdifference_In_Days = subDifference_In_Time / (1000 * 3600 * 24);    
      this.progressDispVal =  "Started: "+ this.getProgStatusInFulDate(startDate) ;
      return (subdifference_In_Days+1)*50;
    }
    else
    if((endDate > toDate) && (startDate > fromDate)){
      let subDifference_In_Time = toDate.getTime() - startDate.getTime();
      let subdifference_In_Days = subDifference_In_Time / (1000 * 3600 * 24);
      // console.log(subdifference_In_Days);
      this.progressDispVal = "Ending: " + this.getProgStatusInFulDate(endDate);
      return (subdifference_In_Days+1)*50;
    }
    else
    if((endDate < toDate) && (startDate > fromDate)){
      let Difference_In_Time = endDate.getTime() - startDate.getTime();
      let difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      // console.log(difference_In_Days);
      this.progressDispVal = "";
      return (difference_In_Days+1)*50;
    }
    
  }

  getDates(){
    let date1 = new Date(this.fromDate);
    let date2 = new Date(this.toDate);
    this.dateDiff = this.getDatesBetweenDates(date1, date2);
  }

  getHtml(i, len){
    this.weekCounter = this.weekCounter + 1;
    if(i===0){
      this.weekCounter = 1;
      return this.weekText + " " + this.weekCounter;
    }else{
      return this.weekText + " " + this.weekCounter;
    }

  }

  checkCol(index, item, len){
    var temp;    
    if(index === 0){
      temp = 'one';
      return true;
    }else
    if(index % 7 === 0){
      temp = 'two';
        return true;
      }else
      if(index === len-6){
        temp = 'four';
          return true;
        }else{
        temp = 'three';
        return false;
      }      
  }

  setColSpan(index, item, len){
    let lastSet:Boolean=false;
    
    if(index === 0){
      return 7-item.getDay();
    }else 
    if(index === len-1){
      return 7-item.getDay();
    }else{
      return 7;
    }
    return 1;
  }

  getDatesBetweenDates(startDate, endDate) {
    let dates = []
    //to avoid modifying the original date
    const theDate = new Date(startDate)
    while (theDate < endDate) {
      dates = [...dates, new Date(theDate)]
      theDate.setDate(theDate.getDate() + 1)
    }
    dates = [...dates, endDate]
    return dates
  }

  yearDiff(y1, y2){
    return y2 - y1;
  }

  daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
  }

  toggleSec(event){
    event.preventDefault();
    event.target.parentElement.parentElement.classList.toggle("collapsed");
    let showingEle = document.querySelectorAll('.'+event.srcElement.attributes.href.nodeValue);
    showingEle.forEach(element => {
      element.classList.toggle("show");
    });
  }
 
}
