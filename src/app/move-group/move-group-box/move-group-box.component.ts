import { ThrowStmt } from '@angular/compiler';
import { Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Console } from 'console';
import { MoveGroupService } from '../move-group.service';

@Component({
  selector: 'app-move-group-box',
  templateUrl: './move-group-box.component.html',
  styleUrls: ['./move-group-box.component.css']
})
export class MoveGroupBoxComponent implements OnInit {

  constructor(private mGService: MoveGroupService) { }

  @ViewChild('matHeadCMG') matHeaderEle: ElementRef;
  @ViewChild('tableOneSort', {static: true}) tableOneSort: MatSort;
  @ViewChild('tableTwoSort', {static: true}) tableTwoSort: MatSort;
  
  moveGroupList:Element[];
  displayedColumns:any = [];
  dataSource:any;
  dataSource2:any;
  enableButton:Boolean = true;
  disableButton:Boolean = true;
  highlightedRowsOriginalGrp:Element;
  custoomMoveGroupList : Array<object> = [];
  activeMGO:any;
  highlightedRowsCustomGrp:Element;
  activeMGC:any;
  cmgHeaderHeight:number;
  countdropdownVal:string = '';
  sizedropdownVal:string = '';
  deviceMaxCount:number;
  remainingCount:number;
  deviceCountOfAdded:number = 0;

  enableDisableSaveMGBtn:Boolean = true;
  dynTxtForBtn:string = 'Create Group';
  // newCustomMoveGroupToSave:CGDP[];
  newCustomMoveGroupToSave:any;
  customMoveGroupToSave:any;
  customMoveGroupAryToSave:any;

  customMoveGroupAryToEditAndSave:any;


  fetchCustomMGData:any;
  dropdownViewMode:Boolean = false;
  customMoveGroupTitle:string = "Custom Migration Group";  
  disableMOveGrp: Boolean = false;
  

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  applyFilterTwo(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource2.filter = filterValue;
  }

  ngAfterViewInit() {
  }

  ngOnInit(): void {


    this.fetchMigrationData();
    this.dataSource2 = new MatTableDataSource(this.custoomMoveGroupList);
    this.enableDisableCreateBtn();

    this.mGService.viewClick$.subscribe(
      mgId =>{ this.viewexistingMG(mgId);
        console.log(mgId)}
    )

    this.mGService.editClick$.subscribe(
      mgId =>{ this.editexistingMG(mgId);
        console.log(mgId)}
    )

    this.mGService.deleteClick$.subscribe(
      mgId =>{ this.deleteexistingMG(mgId);
        console.log(mgId)}
    )
    
    // this.mGService.saveCustMoveGrp().subscribe();
  }

// {"_id": null, "existing_m_ids" : null, "Migration_groups": ["M001","M002","M005"],"Complexity": "Low","Custom_type": "Service"}      

  viewexistingMG(id:string){
    this.custoomMoveGroupList = [];
    this.mGService.getCustMoveGrpById(id).subscribe(data =>{
      this.fetchCustomMGData = data[0];
      
      this.customMoveGroupTitle = this.fetchCustomMGData["Custom_group_id"];
      this.fetchCustomMGData["Migration_group_data"].forEach(item => {
        this.bindCustomMGList(item);    
      });

      this.countdropdownVal = this.fetchCustomMGData["Custom_type"];
      this.sizedropdownVal = this.fetchCustomMGData["Complexity"];

      this.fetchDeviceMaxCount();

      this.dropdownViewMode = true;
      this.disableMOveGrp = true;

    })

  }

  editexistingMG(id:string){
    this.custoomMoveGroupList = [];
    this.mGService.getCustMoveGrpById(id).subscribe(data =>{
      this.fetchCustomMGData = data[0];
      this.customMoveGroupTitle = this.fetchCustomMGData["Custom_group_id"];
      this.fetchCustomMGData["Migration_group_data"].forEach(item => {
        this.bindCustomMGList(item);    
      });

      this.countdropdownVal = this.fetchCustomMGData["Custom_type"];
      this.sizedropdownVal = this.fetchCustomMGData["Complexity"];

      this.fetchDeviceMaxCount();

      this.dynTxtForBtn = 'Save Group';
      this.dropdownViewMode = false;
      this.disableMOveGrp = false;
    })

  }

  deleteexistingMG(mgId){
    this.mGService.deleteCustMoveGrp(mgId).subscribe(data =>{
      this.fetchCustomMGData = data[0];
    });
  }

  bindCustomMGList(ary:any){
    let conversionAry:any =[];
    conversionAry["Application_count"] = ary["Application_count"];
    conversionAry["Device_count"] = ary["Dependent_device_count"];
    conversionAry["Service_count"] = ary["Service_count"];
    conversionAry["Id"] = ary["m_id"];
    conversionAry["Device_name"] = ary["main_device"];
    
    this.custoomMoveGroupList.push(conversionAry);
    this.dataSource2 = new MatTableDataSource(this.custoomMoveGroupList);    
  }

  

  fetchMigrationData(){
    this.mGService.getMigrationGroupList().subscribe((data: Element[])=> {
      this.moveGroupList = data;
      
      this.moveGroupList = this.moveGroupList.map(function (mgL) {
        if(mgL["custom_move_group"]){
          mgL["addedTocustMGrp"] =  true;
        }else{
          mgL["addedTocustMGrp"] =  false;
        }
        
        return mgL
      });


      this.displayedColumns = ['Id', 'Device_name', 'Device_count', 'Application_count', 'Service_count'];
      this.dataSource = new MatTableDataSource(this.moveGroupList);
      this.dataSource.sort = this.tableOneSort;
    });
  }

  enableDisableCreateBtn(){
    if(+this.getDeviceCountofCustMG() > 0 && +this.getDeviceCountofCustMG() <= this.deviceMaxCount){
      this.enableDisableSaveMGBtn = false;
    }else{
      this.enableDisableSaveMGBtn = true;
    }
  }

  

  addToGroup(){
    this.highlightedRowsOriginalGrp["addedTocustMGrp"] =  true;
    this.custoomMoveGroupList.push(this.highlightedRowsOriginalGrp);
    this.dataSource2 = new MatTableDataSource(this.custoomMoveGroupList);
    this.disableAddBtn();
    this.highlightedRowsOriginalGrp = null;
    this.updateRemainingCount(); // update the numbers
    this.dataSource2.sort = this.tableTwoSort;

    this.enableDisableCreateBtn();
  }

  removeFromGroup(){   
    this.custoomMoveGroupList.forEach((item, index) => {
      
      if((this.highlightedRowsCustomGrp["Id"] == item["Id"]) && (this.highlightedRowsCustomGrp["Device_name"] == item["Device_name"])){
        item["addedTocustMGrp"] =  false;     
        this.custoomMoveGroupList.splice(index,1);
      }     
      this.disableRemoveBtn();
    });    
    this.moveGroupList.forEach(item => {
      if((this.highlightedRowsCustomGrp["Id"] == item["Id"]) && (this.highlightedRowsCustomGrp["Device_name"] == item["Device_name"])){
        item["addedTocustMGrp"] =  false;
      }
    });

    this.dataSource2 = new MatTableDataSource(this.custoomMoveGroupList);
    this.disableRemoveBtn();
    this.highlightedRowsCustomGrp = null;
    this.updateRemainingCount();  // update the numbers
    this.enableDisableCreateBtn();
  }

  highlightRowOrgGrpClick(row){    
    this.activeMGO = row;
    this.highlightedRowsOriginalGrp = row;
    this.enableAddBtn();    
  }

  isActiveMGORowClick(row){
    return this.activeMGO === row;
  }

  highlightRowCustGrpClick(row){    
    this.activeMGC = row;
    this.highlightedRowsCustomGrp = row;
    this.enableRemoveBtn();
  }

  isActiveMGCRowClick(row){
    return this.activeMGC === row;
  }

  enableAddBtn(){

    if(this.disableMOveGrp){
      this.enableButton = true;
    }else{
      if(this.countdropdownVal != '' && this.sizedropdownVal != ''){
        this.highlightedRowsOriginalGrp["Device_count"];
        let totalDeviceCountIfAdded = +this.highlightedRowsOriginalGrp["Device_count"] + +this.getDeviceCountofCustMG();
  
        if(+totalDeviceCountIfAdded >= 0 && +totalDeviceCountIfAdded <= this.deviceMaxCount ){
          this.enableButton = false;
        }
        else{
         this.enableButton = true;
        }  
      }
    }        
  }

  disableAddBtn(){
    this.enableButton = true;
  }

  enableRemoveBtn(){
    if(this.disableMOveGrp){
      this.disableButton = true;
    }else{
      if(this.countdropdownVal != '' && this.sizedropdownVal != ''){
        this.disableButton = false;
      }
    }    
  }

  disableRemoveBtn(){
    this.disableButton = true;
  }

  fetchDeviceMaxCount(){
    if(this.countdropdownVal != '' && this.sizedropdownVal != ''){
      this.mGService.getDeviceMaxCount(this.countdropdownVal, this.sizedropdownVal).subscribe(data => this.updateMaxCount(data["max_count"]));
    }else{
      this.updateMaxCount(0);
      this.updateRemainingCount();
    }
  }

  updateMaxCount(num){
    this.deviceMaxCount = +num;
    this.updateRemainingCount();
  }

  updateRemainingCount(){
    this.deviceCountOfAdded = this.getDeviceCountofCustMG();
    this.remainingCount = this.deviceMaxCount - this.deviceCountOfAdded;
  }

  getDeviceCountofCustMG(){
    return this.custoomMoveGroupList.reduce(function (accumulator, item) {
      return accumulator + item["Device_count"];
    }, 0);
  }

  saveCustomGrp(){
    if(this.dynTxtForBtn == 'Save Group'){
      this.updateCustGrp();
      return false;
    }

  this.customMoveGroupAryToSave = [];
    this.custoomMoveGroupList.forEach(objItems => {
      this.customMoveGroupToSave = {};    
      
      this.customMoveGroupToSave["_id"]  = null;
      this.customMoveGroupToSave["existing_m_ids"]  = null;
      this.customMoveGroupToSave["Dependent_device_count"]  = objItems["Device_count"];
      this.customMoveGroupToSave["Application_count"]  = objItems["Application_count"];
      this.customMoveGroupToSave["Service_count"]  = objItems["Service_count"];
      
      this.customMoveGroupAryToSave.push(objItems["Id"]);

      // {"_id": null, "existing_m_ids" : null, "Migration_groups": ["M001","M002","M005"],"Complexity": "Low","Custom_type": "Service"}      
    });

    this.newCustomMoveGroupToSave = {
      _id: null, 
      existing_m_ids : null, 
      Move_groups: this.customMoveGroupAryToSave,
      Complexity: this.sizedropdownVal,
      Custom_type: this.countdropdownVal
    }

    // console.log(this.newCustomMoveGroupToSave);

    // let test = {"_id": "CM-002" , "existing_m_ids" : ["M001","M002","M005"], "Migration_groups": ["M001","M002","M005","M007"],"Complexity": "Low","Custom_type": "Service"};
    
    // console.log(test);

    let custMGCreated = this.mGService.createCustMoveGrp(this.newCustomMoveGroupToSave).subscribe();

    if(custMGCreated){
      console.log(custMGCreated);
     this.ngOnInit();
    }

  }

  updateCustGrp(){

    this.customMoveGroupAryToEditAndSave = {};
    
    const existing_m_ids = this.fetchCustomMGData["Migration_group_data"].map(objItems => objItems.m_id);
    const migration_groups = this.custoomMoveGroupList.map(objItems => objItems["Id"]);

    this.customMoveGroupAryToEditAndSave["_id"] = this.fetchCustomMGData["Custom_group_id"];
    this.customMoveGroupAryToEditAndSave["Complexity"] = this.sizedropdownVal;
    this.customMoveGroupAryToEditAndSave["Custom_type"] = this.countdropdownVal;
    this.customMoveGroupAryToEditAndSave["existing_m_ids"] = existing_m_ids;
    this.customMoveGroupAryToEditAndSave["Move_groups"] = migration_groups;
    
    // {"_id": "CM-002" , "existing_m_ids" : ["M001","M002","M005"], "Migration_groups": ["M001","M002","M005","M007"],"Complexity": "Low","Custom_type": "Service"}

    const updatedMsg = this.mGService.saveCustMoveGrp(this.customMoveGroupAryToEditAndSave).subscribe();

    if(updatedMsg){
      this.mGService.sendClickEvent();
    }
  }
}

export interface Element {
  Id: number;
  Device_name: string;
  Device_count: number;
  Application_count: number;
  Service_count: number;
  addedTocustMGrp:Boolean;
}

export interface CGD{
  m_id: string;
  main_device: string;
  Dependent_device_count: number;
  Application_count: number;
  Service_count: number;
}

export interface CGDP{
  Custom_group_id: string,
  Migration_group_data: CGD[],
  Complexity: string,
  Custom_type: string
}