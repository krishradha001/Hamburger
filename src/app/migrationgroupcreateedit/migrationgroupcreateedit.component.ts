import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ActivatedRoute } from '@angular/router';
import { MigrateService } from '../services/migrate.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-migrationgroupcreateedit',
  templateUrl: './migrationgroupcreateedit.component.html',
  styleUrls: ['./migrationgroupcreateedit.component.css']
})

export class MigrationgroupcreateeditComponent implements OnInit {
  
id:any;

i:any;
display:boolean=false;
gcptarget:any;
currentsizedata:any;
gcpinstancedata:any;
gcpinstancesdata:any;
gcpinstancestorage:any;
gcpinstancedb:any;
gcpcataloguedata:any;
gcpcataloguedatastorage:any;
gcpcataloguedatabase:any;
destination:any;
indeminity:any;
  constructor(private router: Router,private route: ActivatedRoute,private migrateSer: MigrateService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.i = this.route.snapshot.params['i'];
    this.gcptargetsize(this.id,this.i);
    this.currentsize(this.id);
    this.gcpinstance(this.id,this.i);
    this.gcpcatalogue(this.id,this.i);
    this.gcpcataloguedrop(this.id,this.i,this.indeminity);
    
  }
  back():void
  {
    console.log(this.id);
    this.router.navigate(['/migrationgroupcreate/cloudcost', this.id]);
  }

  catalogue(){
    console.log(this.display);
    this.display=!this.display
  }
  gcptargetsize(id,i){
    console.log(id);  
    console.log(i);  
      this.migrateSer.getgcpmigrateview(id,i).subscribe(
     data => {
       this.gcptarget = data;     
       console.log(this.gcptarget);   
      }
      );
    }
    currentsize(id){
      console.log(id);  
     
        this.migrateSer.getmigrateviewcurrent(id).subscribe(
       data => {
         this.currentsizedata = data;     
         console.log(this.currentsizedata);   
        }
        );
      }
      gcpinstance(id,i){
        console.log(id);  
        console.log(i);
       
          this.migrateSer.getgcpmigrateviewinstance(id,i).subscribe(
         data => {
           this.gcpinstancesdata=data
           this.gcpinstancedata= data[0].Instances ;
           this.gcpinstancestorage= data[0].Storage ;
           this.gcpinstancedb= data[0].db ;
           console.log(this.gcpinstancestorage);  
         
           this.gcpinstancedata.forEach(element => {
             console.log(element);
           }); 
          }
          );
        }
        gcpcatalogue(id,i){
          console.log(id);  
         
            this.migrateSer.getgcpmigrateviewcatalogue(id,i).subscribe(
           data => {
             this. gcpcataloguedata = data[0].instances;     
             this. gcpcataloguedatastorage = data[0].storage; 
             this. gcpcataloguedatabase = data[0].database; 
             console.log(this.gcpcataloguedata);   
            }
            );
          }
          drop(event: CdkDragDrop<string[]>) {
            
            if (event.previousContainer === event.container) {
                moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
                console.log(event);
            } else {
                copyArrayItem(event.previousContainer.data,
                    event.container.data,
                    event.previousIndex,
                    event.currentIndex);
                    console.log(event.previousContainer.data[event.previousIndex]);
                  this.indeminity=event.previousContainer.data[event.previousIndex]
                  console.log(this.indeminity);
                  this. gcpcataloguedrop(this.id,this.i,this.indeminity);
            }
           
        }
        gcpcataloguedrop(id,i,indeminity){
          console.log(id);  
          console.log(this.indeminity);
            this.migrateSer.updatedgcpmigrateviewinstance(id,i,indeminity).subscribe(
           data => {
            this.indeminity=data;
            }
            );
          }
        
 
  
}
