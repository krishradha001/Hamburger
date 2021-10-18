import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MigrateService } from '../services/migrate.service';

export interface waveBlockModel {
  name?: any;
  from?: Date;
  to?: Date;
  migrationObj:waveBlockMGModel[]
}

export interface waveBlockMGModel {
  migGrp: string;
  count: number;
  sourceId:string;
  targetId:string;
  targetPort:string;
}

@Component({
  selector: 'app-migration-que',
  templateUrl: './migration-que.component.html',
  styleUrls: ['./migration-que.component.css']
})
export class MigrationQueComponent implements OnInit {

  mRGList:any;
  mRGTempList:any;
  mrGPopupData:any;
  selectedMGITemStatus: string = '';
  selectedMGWITemStatus: string = '';
  addBtnDisable:Boolean=true;
  removeBtnDisable:Boolean=true;
  saveBtnDisable: Boolean=true;
  // New Wave Block 
  // waveBlockName:waveBlockModel;
  waveBlockName:waveBlockModel[]=[];
  waveBlockList:waveBlockModel[]=[];
  migWaveList:any;
  waveBlockCreated:Boolean = false;

  @ViewChild('waveBlock') waveBlock: ElementRef;
  @ViewChild('mgTR') mgTR:ElementRef;

  constructor(private mgServcie: MigrateService, private renderer: Renderer2) { }
  
  ngOnInit(): void {
    this.fetchMRG();
    this.fetchMW();
    this.waveBlockName["migration_groups"] = [];
  }
  
  fetchMRG(){
    this.mgServcie.migrationRdyGrp().subscribe(data => {this.setMrgList(data);});  
  }

  fetchMW(){
    this.mgServcie.migrationWaves().subscribe(data => {this.setMGWList(data);});  
  }

  setMGWList(data){
   this.migWaveList = data; 
   console.log(this.migWaveList);
  }

  setMrgList(data){
    data.forEach(element => {
      console.log(element);
      element["added"] = false;
    });
    this.mRGList = data;
    this.mRGTempList = data;
  }

  setRes(id:String){
    let resData = this.mRGList.filter(item => item._id == id);
    this.mrGPopupData = resData[0].resource_data;
  }

  createWave(){
    this.waveBlockCreated = true;
    this.waveBlockName = [];
    this.waveBlockName["name"] = 'MW_NEW';
    this.waveBlockName["wave_start_date"] = '12-12-2021';
    this.waveBlockName["wave_end_date"] = '12-19-2021';
  }

  selectmgItem(item){
    this.selectedMGITemStatus = item;
    this.selectedMGWITemStatus = '';
    this.addBtnDisable = false;
    this.removeBtnDisable = true;
  }

  selectmgwItem(item){
    this.selectedMGWITemStatus = item;    
    this.selectedMGITemStatus = '';
    this.removeBtnDisable = false;
    this.addBtnDisable = true;
  }

  addToWaveBlock(){   
    this.mRGList.forEach((element, index) => {
      console.log(element._id); 
      console.log(this.selectedMGITemStatus);
      if(element._id == this.selectedMGITemStatus){
        
        this.waveBlockName["migration_groups"].push({
          "_id":element._id,
          "resource_count":element._id,
          "source_id":element.resource_data[0].id,
          "target_id":element.resource_data[0].target_details.ip,
          "target_port":element.resource_data[0].target_details.port
        });
        
        // this.waveBlockName["migration_groups"].push(this.mRGTempList[index]);        
        element["added"] = true;
      }     

    });
    
    if(this.waveBlockName["migration_groups"].length > 0){
      this.saveBtnDisable = false;
    }else{
      this.saveBtnDisable = true;
    }
    // 
    console.log(this.waveBlockName["migration_groups"]);
    console.log(this.mRGTempList);
  }

  removeFrmWaveBlock(){   
    this.waveBlockName["migration_groups"].forEach((element, index) => {
      console.log(element._id); 
      console.log(this.selectedMGITemStatus);
      if(element._id == this.selectedMGWITemStatus){
        this.waveBlockName["migration_groups"].splice(index, 1);        
      }      
    });

    this.mRGList.forEach(element => {
      if(element._id == this.selectedMGWITemStatus){
        element["added"] = false;        
      }      
    });

    console.log(this.waveBlockName["migration_groups"]);
    console.log(this.mRGList);
  }

  saveWaveBlock(){

    let mgwbIdsAry = [];

    this.waveBlockName["migration_groups"].forEach(element => {
      console.log(element);
      mgwbIdsAry.push(element._id);
    });

    let dataToSend = {
      "_id": null, 
      "existing_migration_groups" : null, 
      "wave_start_date" : "12-12-2021", 
      "wave_end_date" : " 12-19-2021", 
      "migration_groups" : mgwbIdsAry
    }

    this.mgServcie.createWaveBlock(dataToSend).subscribe();

  }

}
