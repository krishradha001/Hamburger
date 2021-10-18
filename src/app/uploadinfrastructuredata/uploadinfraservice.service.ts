import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UploadinfraserviceService {
  private baseUrl = 'http://localhost:5000';
  constructor(private http: HttpClient) { }

  downloadtemplate(){
    ;
    return this.http.get(`${this.baseUrl}/upload_template/download`,   {
      responseType: 'blob',
      observe: 'response'
    })
    .pipe(
      map((res: any) => {
        return new Blob([res.body], { type: 'application/.xlsx' });
      })
    );
  }

//   postFile(fileToUpload: File): Observable<boolean> {
//     const endpoint = `${this.baseUrl}/upload_template`;
//     const formData: FormData = new FormData();
//     formData.append('fileKey', fileToUpload, fileToUpload.name);
//     return this.httpClient
//       .post(endpoint, formData, { headers: yourHeadersConfig })
//       .map(() => { return true; })
//       .catch((e) => this.handleError(e));
// }


upload(file: File): Observable<HttpEvent<any>> {
  const formData: FormData = new FormData();
console.log("file");
  formData.append('file', file);

  const req = new HttpRequest('POST', `${this.baseUrl}/upload_template`, formData, {
    reportProgress: true,
    responseType: 'json'
  });

  return this.http.request(req);
}
getFiles(): Observable<any> {
  return this.http.get(`${this.baseUrl}/upload_template`);
}
//upload-document services
uploaddoc(file: File): Observable<HttpEvent<any>> {
  const formData: FormData = new FormData();
console.log("file");
  formData.append('file', file);

  const req = new HttpRequest('POST', `${this.baseUrl}/upload_document`, formData, {
    reportProgress: true,
    responseType: 'json'
  });

  return this.http.request(req);
}
getFilesdoc(): Observable<any> {
  return this.http.get(`${this.baseUrl}/upload_document`);
}
//graphs services
catFiles(val): Observable<any> {
  console.log(val);
  return this.http.get(this.baseUrl+"/ranking/"+ val);
}





//uploadinfradata services

tabledata(id):Observable<any> {
  return this.http.get(`${this.baseUrl}/movegroup_excel/${id}`)
}
uploaded(id:any,file: File): Observable<HttpEvent<any>> {
  console.log(file);
  console.log(id);
  const formData: FormData = new FormData();

  formData.append('file', file);
  
  const req = new HttpRequest('PUT', `${this.baseUrl}/upload_template/${id} `, formData, {
    // const req = new HttpRequest('POST', `${this.baseUrl}/upload_template/${id} `, formData, {
    reportProgress: true,
    responseType: 'json'
    

  });

  return this.http.request(req);
}


}
