import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { MigrateService } from '../services/migrate.service';

@Component({
  selector: 'app-move-group-view',
  templateUrl: './move-group-view.component.html',
  styleUrls: ['./move-group-view.component.css']
})
export class MoveGroupViewComponent implements OnInit {

  constructor(private migrateSer: MigrateService) { }
  movegroup:any ;
  i:boolean=false;
  isCollapsed = true;
  expandContent = false;
  

  ngOnInit(): void {
    this.movegroup_data();
  }
  movegroup_data(){
    this.migrateSer.movegroup_data().subscribe(
      data => {
        this.movegroup = data;     
        // console.log(this.movegroup );   
      // console.log(this.movegroup[0].applications);
       
      }
    );
  }
  disappear()
  {
    this.isCollapsed =  !this.isCollapsed;
    console.log(this.isCollapsed);
  }
  expand(){
    this.expandContent = !this.expandContent
    }
}
