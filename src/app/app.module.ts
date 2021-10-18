import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './loginModule/_helpers';

import { AppComponent } from './app.component';
// import { appRoutingModule } from './app.routing';

import { BasicAuthInterceptor, ErrorInterceptor } from './loginModule/_helpers';
import { HomeComponent } from './loginModule/home';
import { LoginComponent } from './loginModule/login';
import { HeaderComponent } from './header/header.component';
import { PlanComponent } from './plan/plan.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { PickComponent } from './pick/pick.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MigrateComponent } from './migrate/migrate.component';
import { AppRoutingModule } from './app-routing.module';
import { NetworkViewComponent } from './network-view/network-view.component';
import { CountsListComponent } from './counts-list/counts-list.component';
import { AnalyseStatsComponent } from './analyse-stats/analyse-stats.component';
import { MoveGroupViewComponent } from './move-group-view/move-group-view.component';
import { FunctionalDataComponent } from './functional-data/functional-data.component';
import { CostComparisionComponent } from './cost-comparision/cost-comparision.component';
import { MigrationSizingComponent } from './migration-sizing/migration-sizing.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { PrepareComponent } from './prepare/prepare.component';
import { QuestionareComponent } from './questionare/questionare.component';

// import { PrepareComponent } from './prepare/prepare.component';
import { DiscoverComponent } from './discover/discover.component';
import { RecommendComponent } from './recommend/recommend.component';
import { AddquestionareComponent } from './addquestionare/addquestionare.component';
import {MatRadioModule} from '@angular/material/radio';
import { ViewquestionareComponent } from './viewquestionare/viewquestionare.component';
import { FunctionalAppdataComponent } from './functional-appdata/functional-appdata.component';
import { QuestionarecountlistComponent } from './questionarecountlist/questionarecountlist.component';
import { ManualmovegroupComponent } from './manualmovegroup/manualmovegroup.component';
import { ListquestionnaireComponent } from './listquestionnaire/listquestionnaire.component';
import { AngularMaterialModule } from './angular-material.module';
import { MoveGroupBoxComponent } from './move-group/move-group-box/move-group-box.component';
import { MoveGroupSectionComponent } from './move-group/move-group-section/move-group-section.component';
import { WavemovegroupComponent } from './wavemovegroup/wavemovegroup.component';
import { MigrationgrouptargetsizingComponent } from './migrationgrouptargetsizing/migrationgrouptargetsizing.component';
import { MigrationgroupcreateComponent } from './migrationgroupcreate/migrationgroupcreate.component';
import { MigrationgroupcreateviewComponent } from './migrationgroupcreateview/migrationgroupcreateview.component';
import { MigrationgroupcreateeditComponent } from './migrationgroupcreateedit/migrationgroupcreateedit.component';
import { MigrationGroupComponent } from './migration-group/migration-group.component';
import { MigrationReadyGroupComponent } from './migration-ready-group/migration-ready-group.component';
import { MigrationQueComponent } from './migration-que/migration-que.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TimelineComponent } from './timeline/timeline.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSidenavModule} from '@angular/material/sidenav';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MigrationwavestatusComponent } from './migrationwavestatus/migrationwavestatus.component';
import { ManagementheaderComponent } from './managementheader/managementheader.component';

import { ManagementDashboardComponent } from './management-dashboard/management-dashboard.component';
import { ManagementdataspecificComponent } from './management-dashboard/managementdataspecific/managementdataspecific.component';
import { UploadinfrastructuredataComponent } from './uploadinfrastructuredata/uploadinfrastructuredata.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TimelinedashboardComponent } from './timelinedashboard/timelinedashboard.component';
import { HamburgericonComponent } from './hamburgericon/hamburgericon.component';
import { UploadedinfradataComponent } from './uploadinfrastructuredata/uploadedinfradata/uploadedinfradata.component';
import { GraphsComponent } from './graphs/graphs.component';
import { UserAuthComponent } from './loginModule/user-auth/user-auth.component';

@NgModule({
    imports: [
        MDBBootstrapModule.forRoot(),
        FormsModule,
        CommonModule,
        BrowserModule,        
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AngularFileUploaderModule,
        MatDialogModule,
        MatExpansionModule,
        MatRadioModule,
        AppRoutingModule,
        NgbModule,
        NgCircleProgressModule.forRoot({
            // set defaults here
            radius: 100,
            outerStrokeWidth: 16,
            innerStrokeWidth: 8,
            outerStrokeColor: "#78C000",
            innerStrokeColor: "#C7E596",
            animationDuration: 300,
            
          }),
        MatSidenavModule,DragDropModule,
        AngularMaterialModule
    ],
    // entryComponents: [PickComponent],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        HeaderComponent,
        PlanComponent,
        PickComponent,
        MigrateComponent,
        NetworkViewComponent,
        CountsListComponent,
        AnalyseStatsComponent,
        MoveGroupViewComponent,
        FunctionalDataComponent,
        CostComparisionComponent,
        MigrationSizingComponent,
        PrepareComponent,
        QuestionareComponent,
        // QuestionareComponent,
        // PrepareComponent,
        DiscoverComponent,
        RecommendComponent,
        AddquestionareComponent,
        ViewquestionareComponent,
        ListquestionnaireComponent,
        FunctionalAppdataComponent,
        QuestionarecountlistComponent,
        ManualmovegroupComponent,
        MoveGroupBoxComponent,
        MoveGroupSectionComponent,
        WavemovegroupComponent,
        MigrationgrouptargetsizingComponent,
        MigrationgroupcreateComponent,
        MigrationgroupcreateviewComponent,
        MigrationgroupcreateeditComponent,
        MigrationGroupComponent,
        MigrationReadyGroupComponent,
        MigrationQueComponent,
        ManagementDashboardComponent,
        MigrationwavestatusComponent,
        TimelineComponent,
        ManagementheaderComponent,
        ManagementdataspecificComponent,
        UploadinfrastructuredataComponent,
        TimelinedashboardComponent,
        HamburgericonComponent,
        UploadedinfradataComponent,
        UserAuthComponent,
        SitemapComponent,GraphsComponent],         
        
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }