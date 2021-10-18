import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { UploadinfraserviceService } from '../uploadinfrastructuredata/uploadinfraservice.service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {
  catogfile:any;
  val:any=[];
  j:any=0;
  catfilelen:any;
  droplist:any;
  selecteddevice:string;
  pltUrl:any;
  pieChartUrl:any;
  compPlotUrl:any;
  id:number=1001;
  
  constructor(private uploadserv:UploadinfraserviceService,public sanitizer: DomSanitizer) { }

  baseUrl: string = environment.realApiUrl;

  ngOnInit(): void {
  
    this.selecteddevice='Uploaded Data';
    console.log(this.selecteddevice);
    this.getcatFiles();
   
 this.droplist=[{name:"Uploaded Data"}, {name:"Device 42 Data"}, {name:"Combined Data"}];
  }
  
  // pltUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl+ '/plt'+'/Uploaded Data') ;
  // pieChartUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl+ '/pie_chart'+'/Uploaded Data');
  // compPlotUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl+ '/complexity_plot'+'/Uploaded Data');
  // appPlotUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl+ '/applications_plot'+'/this.selecteddevice');
  // piePlotUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl+ '/pie_plot'+'/this.selecteddevice');
  
  plt: Boolean = true;
  pie_chart: Boolean = false;
  complexity_plot: Boolean = false;
  applications_plot: Boolean = false;
  pie_plot: Boolean = false;

  // switchTab(str) {
  //   // console.log(str);
  //   if (str == 'plt') {
  //     this.pie_chart = false;
  //     this.complexity_plot = false;
  //     this.applications_plot = false;
  //     this.pie_plot = false;
  //     this.plt = true;
  //   }
  //   else
  //     if (str == 'pie_chart') {
  //       this.pie_chart = true;
  //       this.complexity_plot = false;
  //       this.applications_plot = false;
  //       this.pie_plot = false;
  //       this.plt = false;
  //       console.log(this.pie_chart);
  //     } else
  //       if (str == 'complexity_plot') {
  //         this.pie_chart = false;
  //         this.complexity_plot = true;
  //         this.applications_plot = false;
  //         this.pie_plot = false;
  //         this.plt = false;
  //       } else
  //         if (str == 'applications_plot') {
  //           this.pie_chart = false;
  //           this.complexity_plot = false;
  //           this.applications_plot = true;
  //           this.pie_plot = false;
  //           this.plt = false;
  //         } else
  //           if (str == 'pie_plot') {
  //             this.pie_chart = false;
  //             this.complexity_plot = false;
  //             this.applications_plot = false;
  //             this.pie_plot = true;
  //             this.plt = false;
  //           }
  // }
  getcatFiles() {
    console.log(this.selecteddevice);
    this.uploadserv.catFiles(this.selecteddevice).subscribe(
      data => {
        this.catogfile= data;
        this.catfilelen=data.length;
        console.log(this.catogfile);
        console.log(this.catfilelen);
        if(this.selecteddevice=='Uploaded Data')
        {
          this.pltUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl+ '/plt'+'/Uploaded Data') ;
          this.pieChartUrl=  this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl+ '/pie_chart'+'/Uploaded Data');
          this.compPlotUrl= this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl+ '/complexity_plot'+'/Uploaded Data');
          // appPlotUrl: this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl+ '/applications_plot'+'/this.selecteddevice');
          // piePlotUrl: this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl+ '/pie_plot'+'/this.selecteddevice');
          
        }
        else if(this.selecteddevice=='Device 42 Data')
        {
          this.pltUrl= this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl+ '/plt'+'/Device 42 Data') ;
          this.pieChartUrl=  this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl+ '/pie_chart'+'/Device 42 Data');
          this.compPlotUrl= this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl+ '/complexity_plot'+'/Device 42 Data');
        }
        else if(this.selecteddevice=='Combined Data')
        {
          this.pltUrl= this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl+ '/plt'+'/Combined Data') ;
          this.pieChartUrl=  this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl+ '/pie_chart'+'/Combined Data');
          // this.compPlotUrl= this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl+ '/complexity_plot'+'/Combined Data');
        }
 
        
      }
    );
  }

}
