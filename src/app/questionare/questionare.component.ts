import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { MigrateService } from '../services/migrate.service';
import { UploadService } from '../upload.service';
import { PickComponent } from '../pick/pick.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router'; 
import { Identifiers } from '@angular/compiler/src/render3/r3_identifiers';
@Component({
  selector: 'app-questionare',
  templateUrl: './questionare.component.html',
  styleUrls: ['./questionare.component.css']
})
export class QuestionareComponent implements OnInit {
  questionares:any=[];selectedFiles: FileList;
  uploadedlist=[];
  data:boolean; 
  save:any;
  progressInfos = [];
  fileInfos:any;
  message:any;
uploadfile:any;
downloadedfile:any;
deletedfile:any;
  constructor(private router: Router,private migrateSer: MigrateService,private uploadService: UploadService, public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.questionnare_data();
  }
  questionnare_data(){
    this.migrateSer.questionnare_data().subscribe(
      data => {
        this.questionares = data;     
        console.log(this.questionares);   
       this.aftersave();
      }
    );
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
      this.uploaded(i, this.save[i]);
      console.log(this.save);
    }
  }
  uploaded(idx, file): void {   
    
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    this.uploadService.uploaded(file).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.fileInfos = this.uploadService.getFilesque;
        }
      },
      err => {
        this.progressInfos[idx].value = 0;
        this.message = 'Could not upload the file:' + file.name;
      });
      
  }
  getFilesque(): void {
    this.uploadService.getFiles().subscribe(
      data => {
        this.uploadfile= data;
        console.log(this.uploadfile);
        
      }
    );
  }
//   downloadfile(i){
//     console.log(i);
//     this.uploadService.downloadfile(i).subscribe(
//       data => {
        
//         this.downloadedfile= data;
//         console.log(this.downloadedfile);
      
        
        
//       }
//     );

//     res => {
//       const fileURL = URL.createObjectURL(res);
//       window.open(fileURL, '_blank');
//       console.log(fileURL);
//     }); 
// }
downloadfile(i){
  console.log(i);
  this.uploadService.downloadfile(i).subscribe(
    data => {     
      
  saveAs(new Blob([data],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}),i);
             
    })
  
}
listquestionnaire(id: number){
  console.log(id);
  this.router.navigate(['listquestionnaire', id]);
}
aftersave()
{
  setTimeout(() => { this.questionnare_data();

  }, 3000);
}
deletequestion(id)
{
  console.log(id);
  this.uploadService.deletequestion(id).subscribe(
    data => {
      
      this.deletedfile= data;
      console.log(this.deletedfile);
     
      this.questionnare_data();
      
    }
  );
}
}

