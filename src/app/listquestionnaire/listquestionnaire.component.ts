import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadService } from '../upload.service';
import { PickComponent } from '../pick/pick.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-listquestionnaire',
  templateUrl: './listquestionnaire.component.html',
  styleUrls: ['./listquestionnaire.component.css']
})
export class ListquestionnaireComponent implements OnInit {
  id:any;
  data:any;
  save:any;
  progressInfos = [];
  fileInfos:any;
  message:any;
  uploadedquestion:any;
  deletedlistfile:any;
  constructor(private router: Router,private route: ActivatedRoute,private uploadService: UploadService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.getdetails(this.id);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(PickComponent, {
      width: '500px',
      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.data=result;
    console.log(this.data);
    this.onNoClick();
      });    
  }
  onNoClick(): void {
    this.save=this.data;
    // this.dialogRef.close(this.savelist);
    for (let i = 0; i < this.save.length; i++) {
      this. uploadedquestions(i, this.save[i]);
      console.log(this.save);
    }
  }
  uploadedquestions(id,file): void {   
 
    
    this.progressInfos[id] = { value: 0, fileName: file.name };
    console.log(id);
    this.uploadService.uploadedquestion(this.id,file).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressInfos[id].value = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.fileInfos = this.uploadService.getdetails(this.id);
        }
      },
      err => {
        this.progressInfos[id].value = 0;
        this.message = 'Could not upload the file:' + file.name;
      });
      
  }
  getdetails(id): void {
    
    console.log(id);
    this.uploadService.getdetails(id).subscribe(
      data => {
        this.uploadedquestion= data;
        console.log(this.uploadedquestion);
        this.aftersave();
        
      }
    );
  }
  downloadquestion(id){
 
    console.log(id);
    this.uploadService.downloadquestion(id).subscribe(
      data => {     
        
    saveAs(new Blob([data],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}),id);
               
      })
    
  }
  viewquestionnaire(id: number, i:number){
    console.log(id);
    console.log(i);
    this.router.navigate(['/viewquestionare', id, i]);
   
  }
  aftersave()
  {
    setTimeout(() => { this.getdetails(this.id);
  
    }, 3000);
  }
  deletelistquestion(id,i)
{
  console.log(id);
  this.uploadService.deletelistquestion(id,i).subscribe(
    data => {
      
      this.deletedlistfile= data;
      console.log(this.deletedlistfile);
     
      this. getdetails(id);
      
    }
  );
}
  
}
