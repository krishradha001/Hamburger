import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MigrateService } from '../services/migrate.service';

@Component({
  selector: 'app-network-view',
  templateUrl: './network-view.component.html',
  styleUrls: ['./network-view.component.css']
})

export class NetworkViewComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private netwrkSer: MigrateService, private sanitizer: DomSanitizer) { }
  
  isexpand:boolean = false;
  isexpand2:boolean = false;
  networkData :any;
  networkDetailsData:any;
  aryNameToFilter:any = [];
  deviceListRecvd:boolean=false;
  iframeDeviceName:any;
  iframeUrl:any;
  baseDeviceUrl:any;
  baseAppUrl:any;
  iframeApsUrl:any;
  trustedDashboardUrl:any;
  deviceTypeSelectedValue:String = 'all';
  applicationsList:any = null;
  selectedType:String = 'all_applications';
  appsJsonData:String;
  appsSelected:String = "null";
  appsIframeParam:String;
  appsUrl:String;
  appsList:any = [];
  appsListRef:any = [];
  showInfoLabel:Boolean= false;
  showSoftInfoLabel:Boolean = false;

  demoDeviceIdAry = [1, 17, 18, 22, 23];
  demoSubnetIds = [1, 22, 23];

  ngOnInit(): void {
    this.document.body.classList.add('networkView');
    this.fetchNetworkData();
    this.baseDeviceUrl = 'assets/cytoscape/deviceMap.html';
    this.baseAppUrl = 'assets/cytoscape/apsIndex.html';
    this.iframeUrl = this.secureIframeUrl(this.baseDeviceUrl);
    this.iframeApsUrl= this.secureIframeUrl(this.baseAppUrl);
    this.setDevicesType();
    this.fetchApplications(this.selectedType);
    this.fetchApiUrl();
    }

  expCol(){
    this.isexpand = !this.isexpand;    
    if(this.isexpand === true){
      this.document.body.classList.add('iframeExp');
    }
  }

  expCol2(){
    this.isexpand2 = !this.isexpand2;
    
    if(this.isexpand2 === true){
      this.document.body.classList.add('iframeExp');
    }
  }

  updateApps(deviceId:number,  deviceName:String){
    if (this.deviceTypeSelectedValue == 'all') {
      return false;
    }
    
    if(deviceName){
      this.iframeDeviceName = 'deviceName='+ deviceId;
      this.selectedType = 'app_in_device/' + deviceName;
      this.fetchApplications('app_in_device/' + deviceName);      
    }else{
      this.iframeDeviceName ='';
    }    
  }

  secureIframeUrl(url:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  highlightApp(app:String){
    this.appsSelected = app;
  }

  setDevicesType() {    
    if (this.deviceTypeSelectedValue == 'all') {
        this.fetchApplications('all_applications');
        this.selectedType = 'all_applications';
    } else
    if (this.deviceTypeSelectedValue == 'select') {
    }
}

  fetchNetworkData(){
    this.netwrkSer.getNetworkView().subscribe((data:any) => {
      this.networkData = data;
      var aryToFilter = [];

      this.networkData.forEach((element, index) => {
        // if (index > 1 && index < 6) {
           if(this.demoSubnetIds.includes(element.subnet_id)){
              this.networkDetailsData = element.details;
              this.networkDetailsData.forEach((detailItem, subIndex) => {
                // if (subIndex < 20) {
                  if(this.demoDeviceIdAry.includes(detailItem._id)){
                  let itemName = (detailItem.name).replace(/[^A-Z0-9]+/ig, "_");
                  aryToFilter.push({itemName});                
                  let conObj = {
                    "id": detailItem._id,
                    "name":detailItem.name
                  }          
                  this.aryNameToFilter.push(conObj);
                
                }
              });              
          }
          if(this.networkData.length - 1 == index){
            this.deviceListRecvd = true;
          }
      });  
    });
  }

  fetchApplications(item:String){
    this.netwrkSer.getApplicationsView(item).subscribe(data =>{
      this.appsList.length = 0;
      this.applicationsList = data;
      this.applicationsList.forEach((element, index) => {
        if (index <= 9) {
          this.appsListRef.push(element.appcomp_name);
          this.appsList.push(element.appcomp_name.replace(/[^a-zA-Z ]/g, ""));
        }
      });

      if(this.selectedType == 'all_applications'){
        this.appsIframeParam = '?selectedType='+this.selectedType+'&selectedAp='+this.appsSelected+'&appsUrl='+this.appsUrl;
        this.iframeApsUrl = this.secureIframeUrl(this.baseAppUrl+ this.appsIframeParam);
      }else{
        this.iframeUrl = this.secureIframeUrl(this.baseDeviceUrl +"?"+ this.iframeDeviceName);
        this.appsIframeParam = '?selectedType='+this.selectedType+'&'+ this.iframeDeviceName+'&appsUrl='+this.appsUrl;
        this.iframeApsUrl = this.secureIframeUrl(this.baseAppUrl+ this.appsIframeParam);
      }
    })
  }

  fetchApiUrl(){
    this.appsUrl = this.netwrkSer.getAppsApiUrl();
  }

}
