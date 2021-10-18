import { Component, OnInit } from '@angular/core';
import { MigrateService } from '../services/migrate.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-migrationgrouptargetsizing',
  templateUrl: './migrationgrouptargetsizing.component.html',
  styleUrls: ['./migrationgrouptargetsizing.component.css']
})
export class MigrationgrouptargetsizingComponent implements OnInit {
targetsizing:any;
savetargetsizing:any;
id:any;
  constructor(private router: Router, private migrateSer: MigrateService) { }

  ngOnInit(): void {
this.target();
this.savetarget();
  }



target(){
    this.migrateSer.gettargetsizing().subscribe(
      data => {
        this.targetsizing = data;     
        console.log(this.targetsizing);   
    
      }
    );
  }
  savetarget(){
    this.migrateSer.getsavetargetsizing().subscribe(
      data => {
        this.savetargetsizing = data;     
        console.log(this.savetargetsizing);   
    
      }
    );
  }
  
  migrationgroup(id:string)
  {
    
    console.log(id);
    
    this.router.navigate(['migrationgroupcreate/cloudcost', id]);
   
  }
}