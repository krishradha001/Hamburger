import { Component, OnInit } from '@angular/core';
import { MigrateService } from '../services/migrate.service';

@Component({
  selector: 'app-migration-ready-group',
  templateUrl: './migration-ready-group.component.html',
  styleUrls: ['./migration-ready-group.component.css']
})
export class MigrationReadyGroupComponent implements OnInit {

  mRGList:any;
  mrGPopupData:any;
  constructor(private mgServcie: MigrateService) { }

  ngOnInit(): void {
    this.fetchMRG();
  }

  fetchMRG(){
    this.mgServcie.migrationRdyGrp().subscribe(data => {this.mRGList = data; console.log(this.mRGList);});  
  }

  setRes(id:String){
    console.log(id);
    console.log(this.mRGList);
    
    let resData = this.mRGList.filter(item => item._id == id);
    console.log(resData);
    this.mrGPopupData = resData[0].resource_data;
    console.log(this.mrGPopupData);
  }


}
