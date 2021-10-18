import { Component, OnInit } from '@angular/core';
import { MigrateService } from '../services/migrate.service';
@Component({
  selector: 'app-migration-sizing',
  templateUrl: './migration-sizing.component.html',
  styleUrls: ['./migration-sizing.component.css']
})
export class MigrationSizingComponent implements OnInit {

  constructor(private migrateSer: MigrateService) { }
suitability:any;
compatibility:any;
migrationsizing;
  ngOnInit(): void {
    this.cloudsuitability_data();
    this.cloudcompatibility_data();
    this.cloudmigrationsizing_data();
  }
  cloudsuitability_data(){
    this.migrateSer.cloudsuitability_data().subscribe(
      data => {
        this.suitability = data;     
        console.log(this.suitability );   
      }
    );
  }
  cloudcompatibility_data(){
    this.migrateSer.cloudcompatibility_data().subscribe(
      data => {
        this.compatibility = data;     
        console.log(this.compatibility);   
      }
    );
  }
  cloudmigrationsizing_data(){
    this.migrateSer.cloudmigrationsizing_data().subscribe(
      data => {
        this.migrationsizing= data;     
        console.log(this.migrationsizing);   
      }
    );
  }
}
