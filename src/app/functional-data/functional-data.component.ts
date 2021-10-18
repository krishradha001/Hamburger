import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MigrateService } from '../services/migrate.service';

@Component({
  selector: 'app-functional-data',
  templateUrl: './functional-data.component.html',
  styleUrls: ['./functional-data.component.css']
})
export class FunctionalDataComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private dataSer: MigrateService) { }

  paramType:String;
  deviceBoxData:any;
  deviceData:any;
  resource_utilization_data:any;
  appData:any;
  movegroup_data:any;
  non_funct_data:any;

  ngOnInit(): void {    
    this.paramType = this.activatedRoute.snapshot.paramMap.get("deviceName");   
    this.fetchDeviceUtilData(this.paramType);
    this.fetchDeviceBoxData(this.paramType);
  }

  fetchDeviceBoxData(deviceName:String){
    this.dataSer.getDeviceBoxData(deviceName).subscribe(data => {this.deviceBoxData = data[0];  });
  }

  fetchDeviceUtilData(deviceName:String){
    this.dataSer.getDeviceUtil(deviceName).subscribe(data => {this.deviceData = data; 
      this.resource_utilization_data = this.deviceData.Resource_utilization_data; 
      this.movegroup_data = this.deviceData.Movegroup_data; 
      this.non_funct_data = this.deviceData.non_funct_data;       
    });
  } 

}
