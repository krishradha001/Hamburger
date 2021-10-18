import { Component, OnInit } from '@angular/core';
import { setInterval } from 'timers';
import { MigrateService } from '../services/migrate.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  constructor(private migrateSer: MigrateService) { }

  devicesList:any;
  config:any;
  
  dynamicVariable:Boolean;
  URL:Boolean;
  devices:Boolean;
  software:Boolean;
  app:Boolean;
  service:Boolean;
  impact:Boolean;
  load:Boolean;
  vendors:Boolean;

  config1:any;
  selectedDevice: string;

  hystax_urlEnbled:Boolean;
  emailEnbled:Boolean;
  passwordEnbled:Boolean;
  get_tokenEnbled:Boolean;
  get_cloudsite_detailsEnbled:Boolean;
  get_cloudsite_devicesEnbled:Boolean;

  hystax_url:any;
  email:any;
  password:any;
  get_token:any;
  get_cloudsite_details:any;
  get_cloudsite_devices:any;

  ngOnInit(): void {
    this.selectedDevice = 'Device42';
    
    this.dynamicVariable = true;
    this.URL =true;
    this.devices =true;
    this.software =true;
    this.app =true;
    this.service =true;
    this.impact =true;
    this.load =true;
    this.vendors=true;

    this.hystax_urlEnbled = true;
    this.emailEnbled = true;
    this.passwordEnbled = true;
    this.get_tokenEnbled = true;
    this.get_cloudsite_detailsEnbled = true;
    this.get_cloudsite_devicesEnbled = true;

    this.fetchDevicesList();
    this. configure_data();    
  }

  fetchDevicesList(){
    this.migrateSer.discoveryDevicesList().subscribe(data => this.devicesList = data);
  }

  configure_data(){
    console.log(this.selectedDevice);
    this.migrateSer.configure_data(this.selectedDevice).subscribe(
      data => {
        this.config= data;     
        console.log(this.config);
      }
    );
  }

  configured_data(){
    this.migrateSer.configured_data(this.selectedDevice, this.config).subscribe(
      data => { 
            this.config1=this.config;
            console.log(this.config1);        
            this.aftersave();
      }
    );    
  }
  
  aftersave()
  {
    setTimeout(() => { 
      this.ngOnInit(); 
    }, 3000);
  }
  }

