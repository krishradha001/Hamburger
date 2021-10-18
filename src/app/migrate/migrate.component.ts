import { Component, OnInit } from '@angular/core';
import { MigrateService } from '../services/migrate.service';

@Component({
  selector: 'app-migrate',
  templateUrl: './migrate.component.html',
  styleUrls: ['./migrate.component.css']
})
export class MigrateComponent implements OnInit {

  constructor(private migrateSer: MigrateService) { }
  
  resourceCount;
  deviceCount;
  total_HyperV_devices;
  total_device_count;
  total_resource_count;
  virtual_device_count;
  recommendCount;
  environmentCount;
  landscapeCount;

  progressdata;
  devicedata;

  public chartType: string = 'pie';

  public chartDatasets: Array<any> = [
    { data: [300, 50, 100, 40, 120], label: 'My First dataset' }
  ];

  public chartLabels: Array<any> = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#FF796B', '#00A3E2', '#E8E8EA', '#006E74', '#007F84'],
      borderWidth: 2
    }
  ];

  public chartOptions: any = {
    responsive: true
  };

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  public chartTypeLine: string = 'line';

  public chartDatasetsLine: Array<any> = [
    { data: [25, 59, 80, 121, 156, 175], label: '' }
  ];

  public chartLabelsLine: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  public chartColorsLine: Array<any> = [
    {
      // backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: '#00A3E2',
      borderWidth: 2     
    }
  ];

  public chartOptionsLine: any = {
    responsive: true
  };
  // public chartClicked(e: any): void { }
  // public chartHovered(e: any): void { }


  ngOnInit(): void {
    this.fetchRecomendedData();
    this.fetchResCount();
    this.fetchDevCount();
    this.environmentData();
    this.landscapeData();
  }

  fetchResCount(){
    this.migrateSer.topboxdata().subscribe(
      data => {
        this.resourceCount = data[0];
        this.total_HyperV_devices = this.resourceCount.total_HyperV_devices;
        this.total_device_count = this.resourceCount.total_device_count;
        this.total_resource_count = this.resourceCount.total_resource_count;
        this.virtual_device_count = this.resourceCount.virtual_device_count;

      }
    );
  }
 
  fetchDevCount(){
    this.migrateSer.discovery_data().subscribe(
      data => {
        this.deviceCount = data;
        this.progressdata = this.deviceCount[0];
        this.devicedata = this.deviceCount.shift();
      }
    );
  }

  environmentData(){
    this.migrateSer.environment_data().subscribe(
      data => {
        this.environmentCount = data;
        // console.log(this.environmentCount);
        // this.environmentCount.split(",");
      }
    );
  }

  landscapeData(){
    this.migrateSer.landscape_data().subscribe(
      data => {
        this.landscapeCount = data;        
      }
    );
  }

  fetchRecomendedData(){
    this.migrateSer.recommend_data().subscribe(
      data => {
        this.recommendCount = data;
      })
  }

  getVal(val){
    return Number(val);
  }

  getValinPx(val){
    return Number(val) + "%";
  }

  getclassList(val){
    return "c100 p" + Number(val) +  " small";
  }
  
}
