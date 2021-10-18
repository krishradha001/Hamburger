import { Component, OnInit } from '@angular/core';
import { UploadinfraserviceService } from './uploadinfraservice.service';
import { saveAs } from 'file-saver';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-uploadinfrastructuredata',
  templateUrl: './uploadinfrastructuredata.component.html',
  styleUrls: ['./uploadinfrastructuredata.component.css']
})
export class UploadinfrastructuredataComponent implements OnInit {
progressInfos=[];
uploadedlist=[];
selectedFiles?: FileList;
currentFile?: File;
progress = 0;
message = '';
uploadfile:any;
uploaddocfile:any;
selectfile:string;
docfile:string;
display;
current:any;
doccurrent:any;
docFiles?: FileList;
currentdocFile?: File;
fileInfos1?: Observable<any>;

fileInfos?: Observable<any>;
  constructor(private router: Router,private uploadserv:UploadinfraserviceService) { }

  ngOnInit(): void {
    this.fileInfos = this.uploadserv.getFiles();
    this.getFiles();
    this.getdocFiles();
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
    this.selectfile=this.selectedFiles[0].name;
    
  
  }
  // upload(file): void {   
    
  //   // this.progressInfos[idx] = { value: 0, fileName: file.name };

  //   this.uploadserv.upload(file).subscribe(
  //     event => {
  //       // if (event.type === HttpEventType.UploadProgress) {
  //       //   this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
  //       // }
  //       // } else if (event instanceof HttpResponse) {
  //       //   this.fileInfos = this.uploadserv.getFiles();
  //       // }
  //     },
  //     err => {
  //       // this.progressInfos[idx].value = 0;
  //       this.message = 'Could not upload the file:' + file.name;
  //     });
      
  // }
  upload(): void {
    
  
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      
  
      if (file) {
        this.currentFile = file;
        
        this.uploadserv.upload(this.currentFile).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
              this.selectfile='';
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.uploadserv.getFiles();
            
            }
          },
          (err: any) => {
            console.log(err);
            this.progress = 0;
  
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }
  
            this.currentFile = undefined;
            
            
          });
      }
  
      this.selectedFiles = undefined;
      this.current=this.currentFile.name
      console.log(this.currentFile.name);

  
    }
  }
  getFiles(): void {
    this.uploadserv.getFiles().subscribe(
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
aftersave2()
{
  setTimeout(() => { this. getdocFiles();

  }, 3000);
}
aftersave1()
{
  setTimeout(() => { this.upload();

  }, 3000);
}
  downloadtemp(){
 
    
    this.uploadserv.downloadtemplate().subscribe(
      data => {     
        
    saveAs(new Blob([data],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}));
               
      })
    
  }
  //upload-document services
  selectdocFile(event: any): void {
    this.docFiles = event.target.files;
    console.log(this.docFiles);
    this.docfile=this.docFiles[0].name;
    console.log(this.docfile);
    
  
  }
  uploaded(): void {
    
  
    if (this.docFiles) {
      const file: File | null = this.docFiles.item(0);
      
  
      if (file) {
        this.currentdocFile = file;
        
        this.uploadserv.uploaddoc(this.currentdocFile).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
              this.docfile='';
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos1 = this.uploadserv.getFilesdoc();
            
            }
          },
          (err: any) => {
            console.log(err);
            this.progress = 0;
  
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }
  
            this.currentdocFile = undefined;
            
            
          });
      }
  
      this.docFiles = undefined;
      this.doccurrent=this.currentdocFile.name
      console.log(this.currentdocFile.name);

  
    }
  }
  getdocFiles(): void {
    this.uploadserv.getFilesdoc().subscribe(
      data => {
        this.uploaddocfile= data;
        console.log(this.uploaddocfile);
        this.aftersave2();
      }
    );
  }
  infradata(id:number)
  {
    this.router.navigate(['infradata', id]);
  }
}
