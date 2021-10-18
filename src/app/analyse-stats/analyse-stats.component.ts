import { Component, OnInit } from '@angular/core';
import { setInterval } from 'timers';
// import { ServerService } from '../server.service';
import { MigrateService } from '../services/migrate.service';

@Component({
  selector: 'app-analyse-stats',
  templateUrl: './analyse-stats.component.html',
  styleUrls: ['./analyse-stats.component.css']
})
export class AnalyseStatsComponent implements OnInit {

  constructor(private migrateSer: MigrateService) { }

  vendorsList: any;
  applicationList: any;
  serverAry:any;
  ApsList:any;
  DepList:any;
  commanAry:any;
  selectedIndex:any;
  selectedIndex1:any;
  resourcesList:any;
  devDepList:any;
  appDepList:any;
  appCompData:any;
  devServiceData:any;
  devSoftData:any;
  appServiceData:any;
  appSoftData:any;
  dependentOn:any;
  dependsOn:any;
  serviceDepData:any;

  selectedRes:string;
  selectedApp:string;


  ngOnInit() {
    this.fetchDevicesList();
    this.fetchVendors();
    // console.log(this.resourcesList);
    // this.fetchApplications();
    // this.onLoadDep();
    this.setRow(0);
    this.setRow1(0);
    this.resourceLoad();
    this.dependencyLoad();
    // this.timeout();
  }

  resourceLoad(){
    if(this.resourcesList){
      console.log(this.resourcesList);
      this.fetchAppsList(this.resourcesList[0].device_name);
    }else{
      setTimeout(() => { this.resourceLoad(); }, 2000);
    }
  }

  dependencyLoad(){
    if(this.ApsList){
      console.log("apps coming");
      this.fetchDepList(this.resourcesList[0].device_name, this.ApsList[0].appcomp_name);
    }else{
      setTimeout(() => { this.dependencyLoad(); 
        console.log("apps inside timeout");
      }, 2000);
      console.log("apps else nextline");
    }
    // this.fetchDepList(this.resourcesList[0].device_name, this.ApsList[0].appcomp_name);
  }

  public setRow(_index: number) {
    this.selectedIndex = _index;
  }

  public setRow1(_index: number) {
    this.selectedIndex1 = _index;
  }

  fetchDevicesList(){
    this.migrateSer.getDevicesList().subscribe(data => 
      {
        this.setResource(data);
      }  
      );
  }

  setResource(data){
    this.resourcesList = data;
    console.log(this.resourcesList);
    console.log(this.resourcesList[0].device_name);
    // this.fetchAppsList(this.resourcesList[0].device_name);
  }

  fetchAppsList(item){
    console.log(item);
    this.selectedRes = item;
    this.migrateSer.getApplicationsDetails(item).subscribe(data => 
      {
        // this.setVendors(data);
        this.setApsData(data);
        this.ApsList = data;
        console.log(this.ApsList);
        // this.fetchDepList(this.resourcesList[0].device_name, this.ApsList[0].appcomp_name);
      }  
      );
      console.log(this.ApsList);
  }

  setApsData(data){
    this.ApsList = data;
        console.log(this.ApsList);
  }

  // shortListVendor(item){
  //   this.DepList = [];

  //   this.commanAry.forEach(servers => {
  //       // console.log(servers.vendors);
  //       if(servers.vendors == item){
  //         this.ApsList = servers.apps;
  //         if(this.ApsList){             
  //         }else{
  //           this.ApsList = [];
  //           console.log("appslist null")
  //         }          
  //       }    
  // });  

 // }

  fetchDepList(devName, appName){

    this.selectedApp = appName;
    
    console.log(devName, appName);
    this.migrateSer.getDevDep(devName).subscribe(data=>
      {
        this.devDepList = data;
        this.appCompData = data[0].appcomp_data;
        this.devServiceData = data[0].service_data;
        this.devSoftData = data[0].software_data;
        console.log(this.devSoftData);
        console.log(this.devDepList);

        console.log(this.appCompData);
        console.log(this.devServiceData);
        console.log(this.devSoftData);
      }
      )

      this.migrateSer.getAppDep(appName).subscribe(data=>
      {
        this.appDepList = data;
        this.dependentOn = data[0].dependent;
        this.dependsOn = data[0].depends_on;
        this.appServiceData = data[0].service_data;
        this.appSoftData = data[0].software_data;
        console.log(this.appDepList);
        console.log(this.dependentOn);
      }
      )

      //dependentOn
  // appCompData:any;
  // serviceData:any;
  // softData:any;
  // dependsOn:any;
  // serviceDepData:any;

  }


  shortListApps(item){
    this.ApsList.forEach(dep => {
      
      if(dep.name == item){
        this.DepList = dep.dep;
      }    
    });
  }

  fetchVendors(){
    this.migrateSer.getVendorsDetails().subscribe(data => 
      {
        this.setVendors(data);        
      }  
      );
  }

  setVendors(data:any){
    this.vendorsList = data.vendors;     
  }

  fetchApplications(param){
    this.migrateSer.getApplicationsDetails(param).subscribe(data => 
      {
        console.log(data);
        this.setApps(data);        
      }  
      );
  }

  setApps(data:any){
    this.applicationList = data;     
  }

}