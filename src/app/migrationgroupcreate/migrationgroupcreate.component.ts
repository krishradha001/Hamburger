import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MigrateService } from '../services/migrate.service';
import { Router } from '@angular/router'; 
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-migrationgroupcreate',
  templateUrl: './migrationgroupcreate.component.html',
  styleUrls: ['./migrationgroupcreate.component.css']
})
export class MigrationgroupcreateComponent implements OnInit {
id:any;
cloudcosting:any;
awscloudcosting:any;
awscloudcosting1:any;
googlecloudcosting:any;
googlecloudcosting1:any;
azurecloudcosting :any;
azurecloudcosting1 :any;
radioSelected:string;
savetargetsize:any;
selectedoption:string;
save:any;
  constructor (private router: Router,private route: ActivatedRoute, private migrateSer: MigrateService, private uploadService: UploadService) { }

  ngOnInit(): void {
    this.savetarget();
    this.id = this.route.snapshot.params['id'];
    this.selectedoption=null;
    console.log(this.id);
 
    this.awscloudcost(this.id);
    this.migrationgroup(this.id)
    this.googlecloudcost(this.id)
    this.azurecloudcost(this.id)
        
  }
  // onItemChange(device){
  //   this.googlecloudcost(this.id);
    
    
  // }
  // onItemChanges(device){
    
    
  //   this.awscloudcost(this.id);
  // }
  // onItemazureChanges(device){
    
  //   this.azurecloudcost(this.id);
  // }
  migrationgroup(id)
  {
    console.log(id);  
    this.uploadService.gettargetsizing(id).subscribe(
   data => {
     this.cloudcosting = data;     
     console.log(this.cloudcosting);   
 
   }
 );
}
 awscloudcost(id){
   console.log(id);  
     this.uploadService.getawscloudcost(id).subscribe(
    data => {
      this.awscloudcosting = data;     
      console.log(this.awscloudcosting);  
      this.awscloudcosting1 = data[0].cloud_name;  
    
    
      console.log(this.awscloudcosting1); 
    //  this. savetarget(this.id, this.awscloudcosting1) 
  
    }
  );
}
googlecloudcost(id){
  console.log(id);  
    this.uploadService.getgooglecloudcost(id).subscribe(
   data => {
     this.googlecloudcosting = data;   
     this.googlecloudcosting1 = data[0].cloud_name;    
     console.log(this.googlecloudcosting);  
     console.log(this.googlecloudcosting1); 

     
     
    // this. savetarget(this.id, this.googlecloudcosting1)
 
   }
 );
}
azurecloudcost(id){
  console.log(id);  
    this.uploadService.getazurecloudcost(id).subscribe(
   data => {
     this.azurecloudcosting = data;     
     console.log(this.azurecloudcosting);  
     this.azurecloudcosting1 = data[0].cloud_name;    
    
     console.log(this.azurecloudcosting1); 
   
    // this. savetarget(this.id, this.azurecloudcosting1) 
    }
    );
  }
  cloud(id:string, i:string)
  {
  console.log(id);
  console.log(i);
    this.router.navigate(['migrationgroupcreateview/cloud_target_sizing', id,i]);
  }
  awscloud(id:string, i:string)
  {
  console.log(id);
  console.log(i);
    this.router.navigate(['migrationgroupcreateview/cloud_target_sizing', id,i]);
  }
  azurecloud(id:string, i:string)
  {
  console.log(id);
  console.log(i);
    this.router.navigate(['migrationgroupcreateview/cloud_target_sizing', id,i]);
  }
  
  cloudedit(id:string, i:string)
  {
  console.log(id);
  console.log(i);
    this.router.navigate(['migrationgroupcreateedit/cloud_target_sizing', id,i]);
  }
  awscloudedit(id:string, i:string)
  {
  console.log(id);
  console.log(i);
    this.router.navigate(['migrationgroupcreateedit/cloud_target_sizing', id,i]);
  }
  azurecloudedit(id:string, i:string)
  {
  console.log(id);
  console.log(i);
    this.router.navigate(['migrationgroupcreateedit/cloud_target_sizing', id,i]);
  }
  getcloudname(selectedoption)
  {
    
      this.selectedoption=selectedoption; 
  }
  savetarget(){
    
    console.log(this.id); 
    console.log(this.selectedoption); 
    if( this.selectedoption)

    {
      
      this.uploadService.onsavetegetsize(this.id,this.selectedoption).subscribe(
     data => {
       this.savetargetsize = data;     
       console.log(this.savetargetsize );   
       this.selectedoption=null ;
        }
      );
    }}

    
}
