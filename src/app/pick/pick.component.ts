import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';
import { Observable } from 'rxjs';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {ViewEncapsulation} from '@angular/core';
export interface DialogData {
    name: string;
}
@Component({
  selector: 'app-pick',
  templateUrl: './pick.component.html',
  styleUrls: ['./pick.component.css'],
  encapsulation: ViewEncapsulation.None 

})
export class PickComponent implements OnInit {

  selectedFiles: FileList;
  uploadedlist=[];
  name  ;
  savelist=[];

  progressInfos = [];
  message = '';

  fileInfos: Observable<any>;
  constructor(private uploadService: UploadService,
    public dialogRef: MatDialogRef<PickComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
//   constructor(private uploadService: UploadService,   public dialogRef: MatDialogRef<PickComponent>)
// {}
 

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
  }

  selectFiles(event): void {
    
    this.progressInfos = [];
    console.log(event);
    this.uploadedlist=[...event];
      
  }


  // upload(idx, file): void {
  //   this.progressInfos[idx] = { value: 0, fileName: file.name };

  //   this.uploadService.upload(file).subscribe(
  //     event => {
  //       if (event.type === HttpEventType.UploadProgress) {
  //         this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
  //       } else if (event instanceof HttpResponse) {
  //         // this.fileInfos = this.uploadService.getFiles();
  //         this.uploadService.getFiles().subscribe(allfiles=>{
          

  //         } );

  //         }
        
  //     },
  //     err => {
  //       this.progressInfos[idx].value = 0;
  //       this.message = 'Could not upload the file:' + file.name;
  //     });
  // }
  

  // uploadFiles(): void {
  //   this.message = '';

  //   for (let i = 0; i < this.selectedFiles.length; i++) {
  //     this.upload(i, this.selectedFiles[i]);
      
  //   }
  // }
  delete(name:any)
  { 
   this.uploadedlist.splice(name,1); 
    
    console.log(this.uploadedlist);


  }
  // onNoClick(): void {
  //   this.savelist=this.uploadedlist
  //   this.dialogRef.close(this.savelist);
  //   for (let i = 0; i < this.savelist.length; i++) {
  //     this.upload(i, this.savelist[i]);
  //   }
  // }
close():void{
  this.dialogRef.close(this.uploadedlist)
  console.log(this.uploadedlist);
}
}
