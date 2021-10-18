import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MigrateService {

  constructor(private http: HttpClient) { }

  baseUrl:string = environment.realApiUrl;

  username: string = "username";
  password: string = "password";

  headers_ = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + btoa(this.username + ":" + this.password));
    
  options = { headers: this.headers_ };
  realApiUrl: string = environment.realApiUrl;
  analyseStatsUrl: string = environment.analyseStatsUrl;

  topboxdata(){
    return this.http.get(this.baseUrl+"/topboxdata");
  }

  discovery_data(){
    return this.http.get(this.baseUrl+"/discovery_data");
  }

  recommend_data(){
    return this.http.get(this.baseUrl+"/recommend_data");
  }

  environment_data(){
    return this.http.get(this.baseUrl+"/progress_percent");
  }

  landscape_data(){
    return this.http.get(this.baseUrl+"/landscape_data");
  }

  network_data(){
    return this.http.get(this.baseUrl+"/networkview");
  }

  getVendorsDetails(){  
    return this.http.get(
      this.analyseStatsUrl + "/vendors",
      this.options
    );
  }

  getApplicationsDetails(items){
    return this.http.get(
      // this.analyseStatsUrl + "/applications",
      this.baseUrl + "/app_in_device/"+items,
      this.options
    );
  }
  getDevicesList(){
    return this.http.get(this.baseUrl+"/devices");
  }

  getDevDep(item){
    return this.http.get(this.baseUrl+"/devicedependencies/"+item);
  }

  getAppDep(item){
    return this.http.get(this.baseUrl+"/appdependencies/"+ item);
  }

  getDeviceUtil(name){
    return this.http.get(this.baseUrl+"/dcresourcedata?name="+ name);
  }

  getAppUtil(name){
    return this.http.get(this.baseUrl+"/appresourcedata?name="+ name);
  }

  getDeviceBoxData(name){
    return this.http.get(this.baseUrl+"/deviceboxdata/"+ name);
  }
  
  questionnare_data(){
    return this.http.get(this.baseUrl+"/upload_ques");
  }
  
  sourcesystem_data(){
    return this.http.get(this.baseUrl+"/sourcesystemdata");
  
  }
  movegroup_data(){
    return this.http.get(this.baseUrl+"/showmovegroupdata");
  
  }
  cloudsuitability_data(){
    return this.http.get(this.baseUrl+"/cloudsuitability");
  
  }
  cloudcompatibility_data(){
    return this.http.get(this.baseUrl+"/compatibility");
  
  }
  cloudmigrationsizing_data(){
    return this.http.get(this.baseUrl+"/migrationsizing/");
  
  }

  discoveryDevicesList(){
    return this.http.get(this.baseUrl+"/config/list");
  }
  configure_data(val){
    return this.http.get(this.baseUrl+"/config/"+ val);
  
  }
  configured_data(val, data){
    return this.http.post(this.baseUrl+"/config/"+ val, data);
  }
    
  resource_data(){
    return this.http.get(this.baseUrl+"/devices");

  }

  getNetworkView(){
    return this.http.get(this.realApiUrl+"/networkview");
  }

  getApplicationsView(name){
    return this.http.get('http://localhost:5000/'+name);
    // return this.http.get('http://localhost:5000/all_applications');
    // return this.http.get(this.realApiUrl+"/networkview/"+name);
  }

  getDeviceApiUrl(){
    return this.realApiUrl+"/networkview";
  }

  getAppsApiUrl(){
    return this.realApiUrl;
  }
  gettargetsizing(){
    return this.http.get(this.realApiUrl+"/target_sizing");
  }
  getsavetargetsizing(){
    return this.http.get(this.realApiUrl+"/cloud_target_sizing");
  }

  getgcpmigrateview(id:string, i:string) : Observable<any>{
  
    return this.http.get(`${this.baseUrl}/cloud_target_sizing/${id}/${i}`);
  }

 
	getmigrateviewcurrent(id:string) : Observable<any>{
  
    return this.http.get(`${this.baseUrl}/target_sizing/${id}`);
  }
 
  getgcpmigrateviewinstance(id:string,i:string) : Observable<any>{
  
    return this.http.get(`${this.baseUrl}/instances/${id}/${i}`);
  }


  getgcpmigrateviewcatalogue(id:string,i:string) : Observable<any>{
  
    return this.http.get(`${this.baseUrl}/catalogue/${id}/${i}`);
  }
  
  migrationGrpSourceDetails(){
    return this.http.get(this.realApiUrl+"/view_migration_groups/migration_groups_source_details");
  }

  migrationGrpConfigTargetetails(){
    return this.http.get(this.realApiUrl+"/view_migration_groups/configure_target");
  }

  migrationRdyGrp(){
    return this.http.get(this.realApiUrl+"/view_migration_groups/migration_ready_groups");
  }

  postConfigureTarget(data){
    return this.http.post(this.baseUrl+"/view_migration_groups", data);
  }

  migrationWaves(){
    return this.http.get(this.realApiUrl+"/migration_waves");
  }

  migrationTimeline(){
    return this.http.get(this.realApiUrl+"/migration_timeline");
  }

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });


  createWaveBlock(data: any) {
    return this.http.post(
      this.realApiUrl  +'/migration_waves',
      JSON.stringify(data),
      {headers: this.headers}
    )
  }
  	
updatedgcpmigrateviewinstance(id,i,indeminity){
  console.log(id);
  console.log(indeminity);
  return this.http.put(`${this.baseUrl}/catalogue/${id}/${i}`,indeminity);
}

}
