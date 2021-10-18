import { Component, OnInit } from '@angular/core';
import { MigrateService } from '../services/migrate.service';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {
  
source:any;

  constructor(private migrateSer: MigrateService) { }
 
  ngOnInit(): void {
    this.sourcesystem_data();
  }
  sourcesystem_data()
  {
    this.migrateSer.sourcesystem_data().subscribe(
      data => {
        this.source = data;     
        console.log(this.source);   
      }
    );
  }
}
