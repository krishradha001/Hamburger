import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoveGroupService {

  private moveGroupViewActions = new Subject<string>();
  viewClick$ = this.moveGroupViewActions.asObservable();

  private moveGroupEditActions = new Subject<string>();
  editClick$ = this.moveGroupEditActions.asObservable();

  private moveGroupDeleteActions = new Subject<string>();
  deleteClick$ = this.moveGroupDeleteActions.asObservable();

  private subject = new Subject<any>();

  constructor(private http: HttpClient) { }

  realApiUrl: string = environment.realApiUrl;

  sendClickEvent() {
    this.subject.next();
  }

  getClickEvent(): Observable<any>{ 
    return this.subject.asObservable();
  }

  viewClicked(Id:string){
    this.moveGroupViewActions.next(Id);
  }

  editClicked(id:string){
    this.moveGroupEditActions.next(id);
  }

  deleteClicked(Id:string){
    this.moveGroupDeleteActions.next(Id);
  }
  
  getMigrationGroupList(){
    return this.http.get(this.realApiUrl  +'/migrationgrouplist');
  }
  
  getDeviceMaxCount(type, complexity){
    return this.http.get(this.realApiUrl  +'/showmaxcount?type='+type+'&complexity='+complexity);
  }

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  createCustMoveGrp(data: any) {
    return this.http.post(
      this.realApiUrl  +'/custommigrationgroups',
      JSON.stringify(data),
      {headers: this.headers}
    )
  }

  saveCustMoveGrp(data: any) {
    
    return this.http.post(
      this.realApiUrl  +'/custommigrationgroups',
      data,
      {headers: this.headers}
    )   
  }

  getCustMoveGrpById(mgId:string){
    console.log(mgId);
    return this.http.get(this.realApiUrl  +'/custommigrationgroups/'+mgId);
  }

  getCustMoveGrp(){
    return this.http.get(this.realApiUrl  +'/custommigrationgroups');
  }

  deleteCustMoveGrp(mgId:string){
    return this.http.delete(this.realApiUrl  +'/custommigrationgroups?cmid='+mgId);
  }

  
}
