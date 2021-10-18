import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
console.log("file");
    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/files`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
  uploaded(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload_ques`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
  deletePost(id){
    console.log(id);
    return this.http.delete(`${this.baseUrl}/files/${id}`);
       
  }
  
  getFilesque(): Observable<any> {
    return this.http.get(`${this.baseUrl}/upload_ques`);
  }
  downloadfile(id){
    console.log(id);
    return this.http.get(`${this.baseUrl}/upload_ques/${id}`,   {
      responseType: 'blob',
      observe: 'response'
    })
    .pipe(
      map((res: any) => {
        return new Blob([res.body], { type: 'application/.xlsx' });
      })
    );
  }
  uploadedquestion(id:any,file: File): Observable<HttpEvent<any>> {
    console.log(file);
    console.log(id);
    const formData: FormData = new FormData();

    formData.append('file', file);
    
    const req = new HttpRequest('POST', `${this.baseUrl}/app_in_question/${id} `, formData, {
      
      reportProgress: true,
      responseType: 'json'
      

    });

    return this.http.request(req);
  }
  
  getdetails(id): Observable<any> {
    console.log(id);
    return this.http.get(`${this.baseUrl}/app_in_question/${id}`);
  }
  downloadquestion(id){
    console.log(id);
    return this.http.get(`${this.baseUrl}/download_response/${id}`,   {
      responseType: 'blob',
      observe: 'response'
    })
    .pipe(
      map((res: any) => {
        return new Blob([res.body], { type: 'application/.xlsx' });
      })
    );
  }
  viewdetails(id,i): Observable<any> {
    console.log(id);
    console.log(i);
    return this.http.get(`${this.baseUrl}/response/${id}/${i}`);
  }
  viewdownloadquestion(id,i){
    console.log(id);
    return this.http.get(`${this.baseUrl}/download_response/${id}/${i}`,   {
      responseType: 'blob',
      observe: 'response'
    })
    .pipe(
      map((res: any) => {
        return new Blob([res.body], { type: 'application/.xlsx' });
      })
    );
  }
  deletequestion(id){
    console.log(id);
    return this.http.delete(`${this.baseUrl}/upload_ques/${id}`);
       
  }
  deletelistquestion(id,i){
    console.log(id);
    return this.http.delete(`${this.baseUrl}/response/${id}/${i}`);
       
  }
  getawscloudcost(id:string) : Observable<any>{  
    console.log(id);   
    return this.http.get(`${this.baseUrl}/cloudcost/${id}`);
  }
  gettargetsizing(id:string) : Observable<any>{
    console.log(id);
    return this.http.get(`${this.baseUrl}/target_sizing/${id}`);
  }
  getgooglecloudcost(id:string) : Observable<any>{  
    console.log(id);   
    return this.http.get(`${this.baseUrl}/gcpcost/${id}`);
  }
  getazurecloudcost(id:string) : Observable<any>{  
    return this.http.get(`${this.baseUrl}/azurecost/${id}`);
  }
  onsavetegetsize(id:any,i:any): Observable<any>{
    console.log(id); 
    console.log(i);
    alert(i);
    // return this.http.post('http://localhost:5000/cloud_target_sizing/MG-001/aws','');
      // return this.http.post(`${this.baseUrl}/cloud_target_sizing/${id}/azure`,i);
      return this.http.post(`${this.baseUrl}/cloud_target_sizing/${id}/${i}`,i);
    
      
    }
  }