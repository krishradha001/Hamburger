import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { setInterval } from 'timers';
import { MoveGroupService } from '../move-group.service';

@Component({
  selector: 'app-move-group-section',
  templateUrl: './move-group-section.component.html',
  styleUrls: ['./move-group-section.component.css']
})
export class MoveGroupSectionComponent implements OnInit {

  customMoveGrpData:any;
  // customMoveGrpDataById:any;

  clickEventsubscription:Subscription;
  
  constructor(private mgService: MoveGroupService) {
    this.mgService.getClickEvent().subscribe(()=>{
      setTimeout(() => {
        this.fetchCustMoveGroup();  
      }, 3000);      
      })
   }

  ngOnInit(): void {
    this.fetchCustMoveGroup();  
  }

  fetchCustMoveGroup(){
    this.mgService.getCustMoveGrp().subscribe(data => 
      {this.customMoveGrpData = data; console.log(this.customMoveGrpData);})
  }

  viewMG(id:string){
    this.mgService.viewClicked(id);
  }

  editMG(id:string){
    this.mgService.editClicked(id);
  }
  
  deleteMG(id:string){
    this.mgService.deleteClicked(id);  
    setTimeout(() => {
      this.fetchCustMoveGroup();  
    }, 1000);        
  }


}
