import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MigrateService } from '../services/migrate.service';

@Component({
  selector: 'app-functional-appdata',
  templateUrl: './functional-appdata.component.html',
  styleUrls: ['./functional-appdata.component.css']
})
export class FunctionalAppdataComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private dataSer: MigrateService) { }

  paramType:String;
  appDetails:any;
  appcomp_name:any;
  appcompData:any;  
  movegroup_data:any;
  non_funct_data:any;

  ngOnInit(): void {    
    this.paramType = this.activatedRoute.snapshot.paramMap.get("appName");   
    this.fetchDeviceUtilData(this.paramType);
  }

  fetchDeviceUtilData(appName:String){
    this.dataSer.getAppUtil(appName).subscribe(data => {this.appDetails = data; 
      // console.log(this.appDetails);

      if(this.appDetails){
        this.appcompData = this.appDetails.appcomp_data; 
        this.movegroup_data = this.appDetails.Movegroup_data; 
        this.non_funct_data = this.appDetails.non_funct_data;     
      }
      
      
      // console.log(this.appcompData);
      // console.log(this.appcompData.device);
      // console.log(this.movegroup_data);
      // console.log(this.non_funct_data);  
    });
  } 

}

