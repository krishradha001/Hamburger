import { Component, OnInit } from '@angular/core';
import { MigrateService } from '../services/migrate.service';

@Component({
  selector: 'app-counts-list',
  templateUrl: './counts-list.component.html',
  styleUrls: ['./counts-list.component.css']
})
export class CountsListComponent implements OnInit {

  constructor(private migrateSer: MigrateService) { }

  resourceCount:any;
  deviceCount:any;
  total_hyperv_devices:any;
  total_device_count:any;
  total_resource_count:any;
  virtual_device_count:any;
  recommendCount:any;
  environmentCount:any;
  landscapeCount:any;
  progressdata:any;
  devicedata:any;

  ngOnInit(): void {
    this.fetchResCount();
    this.fetchDevCount();
  }

  fetchResCount(){
    this.migrateSer.topboxdata().subscribe(
      (data:any) => {
        this.resourceCount = data[0];
        this.total_hyperv_devices = this.resourceCount.total_hyperv_devices;
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

}
