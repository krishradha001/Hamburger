import { Component, OnInit, Output } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadService } from '../../app/upload.service';
import { MatDialog } from '@angular/material/dialog';
import { PickComponent } from '../pick/pick.component';
import { EventEmitter } from 'protractor';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  selectedFiles: FileList;
  progressInfos = [];
  message = '';
  list=[];
  uploadfile:any;
  savelist:any;
  dialogRef:any;
  

  fileInfos: Observable<any>;
  uploadedfile:any;
  

  constructor(private uploadService: UploadService, public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.getFiles();
  
 
    
  }
  onNoClick(): void {
    this.savelist=this.list;
    // this.dialogRef.close(this.savelist);
    for (let i = 0; i < this.savelist.length; i++) {
      this.upload(i, this.savelist[i]);
    }
  }
  
  upload(idx, file): void {   
    
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    this.uploadService.upload(file).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progressInfos[idx].value = 0;
        this.message = 'Could not upload the file:' + file.name;
      });
      
  }

  // uploadFiles(): void {
  //   this.message = '';
  //   debugger

  //   for (let i = 0; i < this.selectedFiles.length; i++) {
  //     debugger
  //     this.upload(i, this.selectedFiles[i]);
      
  //   }
  // }

  openDialog(): void {
    const dialogRef = this.dialog.open(PickComponent, {
      width: '500px',
      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.list=result;
    console.log(this.list);
    this.onNoClick();
    });    
  }
  getFiles(): void {
    this.uploadService.getFiles().subscribe(
      data => {
        this.uploadfile= data;
        console.log(this.uploadfile);
        this.aftersave();
      }
    );
  }
  aftersave()
{
  setTimeout(() => { this.getFiles();

  }, 3000);
}
 
  deletePost(i){
    
    console.log(i);
    this.uploadService.deletePost(i).subscribe(
      data => {
        
        this.uploadedfile= data;
        console.log(this.uploadedfile);
        this.getFiles();
        
        
      }
    );
    }
    

}
