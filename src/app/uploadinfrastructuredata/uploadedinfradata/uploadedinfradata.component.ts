import { Component, OnInit } from '@angular/core';
import { UploadinfraserviceService } from '../uploadinfraservice.service';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { PickComponent } from 'src/app/pick/pick.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-uploadedinfradata',
  templateUrl: './uploadedinfradata.component.html',
  styleUrls: ['./uploadedinfradata.component.css']
})
export class UploadedinfradataComponent implements OnInit {
tablefile:any;
tablerow:any;
selectedFiles: FileList;
  progressInfos = [];
  message = '';
  list=[];
  uploadfile:any;
  savelist:any;
  dialogRef:any;
  id:any;

  fileInfos: Observable<any>;
  
  name:string ='test';
  
  constructor(private route: ActivatedRoute,private uploadserv:UploadinfraserviceService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
  this.gettablefile(this.id);
  }


gettablefile(id): void
{
  this.uploadserv.tabledata(id).subscribe(
    data => {
      this.tablefile= data[0]
      this.tablerow= data
      console.log(this.tablefile);
      console.log(this.tablerow);
      this.aftersave();
    }
  );
}
returnZero() {
  return 0
}
openDialog(): void {
  const dialogRef = this.dialog.open(PickComponent, {
    width: '500px',
    data: {name: this.name},
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result);
    this.list=result;
  console.log(this.list);
  this.onNoClick();
  });    
}
onNoClick(): void {
  this.savelist=this.list;
  // this.dialogRef.close(this.savelist);
  for (let i = 0; i < this.savelist.length; i++) {
    this.upload(i, this.savelist[i]);
  }
}

upload(id, file): void {   
  
  this.progressInfos[id] = { value: 0, fileName: file.name };

  this.uploadserv.uploaded(this.id,file).subscribe(
    event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progressInfos[id].value = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.fileInfos = this.uploadserv.tabledata(this.id);
      }
    },
    err => {
      this.progressInfos[id].value = 0;
      this.message = 'Could not upload the file:' + file.name;
    });
    
}
aftersave()
{
  setTimeout(() => { this.gettablefile(this.id);

  }, 3000);
}

}
