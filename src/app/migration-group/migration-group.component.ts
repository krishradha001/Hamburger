import { Component, HostListener, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Readable } from 'stream';
import { MigrateService } from '../services/migrate.service';

@Component({
  selector: 'app-migration-group',
  templateUrl: './migration-group.component.html',
  styleUrls: ['./migration-group.component.css']
})
export class MigrationGroupComponent implements OnInit {

  constructor(private migrateservice: MigrateService, public dialog: MatDialog, private fb: FormBuilder) { }

  mgSList: any;
  mgCTList:any;
  mgCTData:any;
  mgSListId: any;
  mgSListPort: any;
  mgSListLoc: any;
  htmlContent:any;
  screenWidth:any;
  mrGPopupData:any;
  configForm: FormGroup;
  formsAry:any;
  expConfigData:any;

  tempMG:any;
  
  sName:any;
  
  form = this.fb.group({ 
    lessons  : this.fb.array([])  
  });

  ngOnInit(): void {
    this.mGSDetails();
    this.mGCT();
    this.screenWidth = window.innerWidth - 50;

    this.configForm = new FormGroup({
      configTFrm: new FormArray([])
    });

    this.htmlContent = '<h2 mat-dialog-title>Install Angular</h2>'+
      '<h3>Develop across all platforms</h3>'+
      '<p>Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>';   
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth - 50;
  }

  openDialog() {
    const dialogRef = this.dialog.open(this.htmlContent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  mGCT(){
    this.migrateservice.migrationGrpConfigTargetetails().subscribe(
      data => {
        this.mgCTList = data;
        console.log(this.mgCTList);        
      });    
  }

  getConfigData(id:String){
    let resData = this.mgCTList.filter(item => item._id == id);
    console.log(resData[0]);
    this.setMGWList(resData);
    this.expConfigData = [];
    // this.expConfigData = resData[0].resource_data;
    this.expConfigData = resData;
  }

  setMGWList(data){
    let resTarget= data[0].resource_data;
      resTarget.forEach(element => {  
        this.configTargetForm(element, data[0]._id);        
      });
    console.log(resTarget[0]);
  }

  setRes(id:String){
    console.log(id);
    console.log(this.mgSList);
    
    let resData = this.mgSList.filter(item => item._id == id);
    console.log(resData);
    this.mrGPopupData = resData[0].resource_data;
    console.log(this.mrGPopupData);
    
  }

  configTargetForm(details, mId){
    console.log(details);  
    // details.source_details

    const lessonForm = this.fb.group({
      mgId: [mId],
      resId: [details.id],
      resName: [details.name],
      sName: new FormControl({value:details.source_details.name, disabled:true}), //[details.source_details.name],
      sIp:  new FormControl({value:details.source_details.ip, disabled:true}),
      sLocation:  new FormControl({value:details.source_details.location, disabled:true}),
      sPort:  new FormControl({value:details.source_details.port, disabled:true}),
      sVlan:  new FormControl({value:details.source_details.vlan, disabled:true}),
      sHost:  new FormControl({value:details.source_details.host, disabled:true}),
      sStorage: new FormControl({value:details.source_details.storage, disabled:true}),
      sVcenter:  new FormControl({value:details.source_details.vcentre, disabled:true}),
      tName: [details.target_details.name],
      ip: [details.target_details.ip],
      port: [details.target_details.port],
      vlan: [details.target_details.vlan],
      host: [details.target_details.host],
      storage: [details.target_details.storage],
      vcentre: [details.target_details.vcentre],
      rep_start_date: [details.target_details.rep_start_date],
      rep_end_date: [details.target_details.rep_end_date],
      cut_over_date: [details.target_details.cut_over_date],
    });
    this.lessons.push(lessonForm);    
  }

  configTargetSave(){
    console.log(this.lessons.value);
    console.log(this.lessons.value.length);
    let mgObj = {};
    console.log(this.expConfigData);
    
    mgObj = {
      "_id" : this.lessons.value[0].mgId,
      "resource_data" : []
    }

    if(this.lessons.value.length){
      this.lessons.value.forEach((element, index) => {
      
        console.log(element);
        
        let resDataObj = 
        {
          "id" : this.expConfigData["0"].resource_data[index].id,
          "name" : this.expConfigData["0"].resource_data[index].name,
          "source_details" : {
            "name" : this.expConfigData["0"].resource_data[index].source_details.name,
            "ip" : this.expConfigData["0"].resource_data[index].source_details.ip,
            "port" : this.expConfigData["0"].resource_data[index].source_details.port,
            "location" : this.expConfigData["0"].resource_data[index].source_details.location,
            "vlan" : this.expConfigData["0"].resource_data[index].source_details.vlan,
            "host" : this.expConfigData["0"].resource_data[index].source_details.host,
            "storage" : this.expConfigData["0"].resource_data[index].source_details.storage,
            "vcentre": this.expConfigData["0"].resource_data[index].source_details.vcentre
          },
          "target_details" : {
            "name" : element.tName,
            "ip" : element.ip,
            "port" : element.port,
            "vlan" : element.vlan,
            "host" : element.host,
            "storage" : element.storage,
            "vcentre" : element.vcentre
          },
          "rep_start_date" : this.expConfigData["0"].resource_data[index].rep_start_date,
          "rep_end_date" : this.expConfigData["0"].resource_data[index].rep_end_date,
          "cut_over_date" : this.expConfigData["0"].resource_data[index].cut_over_date,
          "futute_migration_strategy" : "yes",
          "migration_notes" : "done"
        };
        
        mgObj["resource_data"].push(resDataObj);

        
      });

      console.log(mgObj);

      this.migrateservice.postConfigureTarget(mgObj).subscribe(
        data => data
      );

    }

          //   {
      //     "_id" : "MG-005",
      //     "resource_data" : [
      //         {
      //             "id" : 1,
      //             "name" : "XYZ",
      //             "source_details" : {
      //                 "name" : "XYZ",
      //                 "ip" : "1.2.3.4",
      //                 "port" : 89,
      //                 "location" : "AWS Cloud",
      //                 "vlan" : "abc",
      //                 "host" : "abc",
      //                 "storage" : 1024,
      //                 "vcentre" : 2048
      //             },
      //             "target_details" : {
      //                 "name" : "PQR",
      //                 "ip" : "1.2.3.4",
      //                 "port" : 89,
      //                 "vlan" : "abc",
      //                 "host" : "abc",
      //                 "storage" : 1024,
      //                 "vcentre" : 2048
      //             },
      //             "rep_start_date" : "01-01-2021",
      //             "rep_end_date" : "01-10-2021",
      //             "cut_over_date" : "01-18-2021",
      //             "futute_migration_strategy" : "yes",
      //             "migration_notes" : "done"
      //         }
      //     ]
      // }


    // Complexity: "Low"
    // Custom_type: "Device"
    // Move_groups: (2) ["M003", "M005"]
    // resource_count: 2
    // resource_data: (2) [{…}, {…}]
    // status: "Created migration group"
    // _id: "MG-001"

  //   {
  //     "_id" : "MG-005",
  //     "resource_data" : [
  //         {
  //             "id" : 1,
  //             "name" : "XYZ",
  //             "source_details" : {
  //                 "name" : "XYZ",
  //                 "ip" : "1.2.3.4",
  //                 "port" : 89,
  //                 "location" : "AWS Cloud",
  //                 "vlan" : "abc",
  //                 "host" : "abc",
  //                 "storage" : 1024,
  //                 "vcentre" : 2048
  //             },
  //             "target_details" : {
  //                 "name" : "PQR",
  //                 "ip" : "1.2.3.4",
  //                 "port" : 89,
  //                 "vlan" : "abc",
  //                 "host" : "abc",
  //                 "storage" : 1024,
  //                 "vcentre" : 2048
  //             },
  //             "rep_start_date" : "01-01-2021",
  //             "rep_end_date" : "01-10-2021",
  //             "cut_over_date" : "01-18-2021",
  //             "futute_migration_strategy" : "yes",
  //             "migration_notes" : "done"
  //         }
  //     ]
  // }
  
}

  get lessons() {
    return this.form.controls["lessons"] as FormArray;
  }

  getItem(type:string, pId:String, id:string){
    let resData = this.mgSList.filter(item => item._id == pId);
    let subData = resData.filter(item => item.id == id);
    console.log(type);
    console.log(subData);
  }

  mGSDetails(){
    this.migrateservice.migrationGrpSourceDetails().subscribe(
      data => {
        this.mgSList = data;
        console.log(this.mgSList);
        let resData = this.mgSList[0].resource_data;
        console.log(resData);
        this.mgSListId = [];
        this.mgSListLoc = [];
        this.mgSListPort = [];
        
        resData.forEach(ele => {
          console.log(ele)
          this.mgSListId.push(ele.id);
          
          let sDData = ele.source_details;

          this.mgSListLoc.push(sDData.location);
          this.mgSListPort.push(sDData.port);
          
        });
        console.log(this.mgSListId);
       
        console.log(this.mgSListLoc);
        console.log(this.mgSListPort);        
      });    
  }

}
