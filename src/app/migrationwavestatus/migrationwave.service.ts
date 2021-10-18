import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MigrationwaveService {
  private baseUrl = 'http://localhost:5000';
  constructor(private http: HttpClient) { }
waveselect(){
  return this.http.get(this.baseUrl+"/migration_waves/list/waves");
}
waveidselect(wave){
  console.log(wave)
  
  return this.http.get(this.baseUrl+"/migration_waves/list/"+ wave);
}
waveappidselect(waveid,appid){
  console.log(waveid)
  console.log(appid)
  
  
  return this.http.get(`${this.baseUrl}/wave_status/${waveid}/${appid}`);
}
appselect(){
  return this.http.get(this.baseUrl+"/all_applications");
}
appidselect(applctnid){
  console.log(applctnid);
  return this.http.get(`${this.baseUrl}/application_migration_status/${applctnid}`);
}
resourcemigrationselect(){
  return this.http.get(this.baseUrl+"/resource_migration_summary");
}   
getmigrationwave(){
  return this.http.get(this.baseUrl+"/migration_wave_summary");
}
}





