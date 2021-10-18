import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountsListComponent } from './counts-list/counts-list.component';
import { HomeComponent } from './loginModule/home';
import { LoginComponent } from './loginModule/login';
import { MigrateComponent } from './migrate/migrate.component';
import { NetworkViewComponent } from './network-view/network-view.component';
import { PickComponent } from './pick/pick.component';
import { PlanComponent } from './plan/plan.component';
import { AuthGuard } from './loginModule/_helpers';
import { AnalyseStatsComponent } from './analyse-stats/analyse-stats.component';
import { MoveGroupViewComponent } from './move-group-view/move-group-view.component';
import { FunctionalDataComponent } from './functional-data/functional-data.component';
import { CostComparisionComponent } from './cost-comparision/cost-comparision.component';
import { MigrationSizingComponent } from './migration-sizing/migration-sizing.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { PrepareComponent } from './prepare/prepare.component';
import { QuestionareComponent } from './questionare/questionare.component';
import { DiscoverComponent } from './discover/discover.component';
import { RecommendComponent } from './recommend/recommend.component';
import { AddquestionareComponent } from './addquestionare/addquestionare.component';
import { ViewquestionareComponent } from './viewquestionare/viewquestionare.component';
import { FunctionalAppdataComponent } from './functional-appdata/functional-appdata.component';
import { ManualmovegroupComponent } from './manualmovegroup/manualmovegroup.component';
import { ListquestionnaireComponent } from './listquestionnaire/listquestionnaire.component';
import { MoveGroupSectionComponent } from './move-group/move-group-section/move-group-section.component';
import { WavemovegroupComponent } from './wavemovegroup/wavemovegroup.component';
import { MigrationgrouptargetsizingComponent } from './migrationgrouptargetsizing/migrationgrouptargetsizing.component';
import { MigrationgroupcreateComponent } from './migrationgroupcreate/migrationgroupcreate.component';
import { MigrationgroupcreateviewComponent } from './migrationgroupcreateview/migrationgroupcreateview.component';
import { MigrationgroupcreateeditComponent } from './migrationgroupcreateedit/migrationgroupcreateedit.component';
import { MigrationGroupComponent } from './migration-group/migration-group.component';
import { MigrationReadyGroupComponent } from './migration-ready-group/migration-ready-group.component';
import { MigrationQueComponent } from './migration-que/migration-que.component';
import { TimelineComponent } from './timeline/timeline.component';
import { MigrationwavestatusComponent } from './migrationwavestatus/migrationwavestatus.component';
import { ManagementheaderComponent } from './managementheader/managementheader.component';
import { ManagementDashboardComponent } from './management-dashboard/management-dashboard.component';
import { ManagementdataspecificComponent } from './management-dashboard/managementdataspecific/managementdataspecific.component';
import { UploadinfrastructuredataComponent } from './uploadinfrastructuredata/uploadinfrastructuredata.component';
import { TimelinedashboardComponent } from './timelinedashboard/timelinedashboard.component';
import { HeaderComponent } from './header/header.component';
import { HamburgericonComponent } from './hamburgericon/hamburgericon.component';
import { GraphsComponent } from './graphs/graphs.component';
import { UploadedinfradataComponent } from './uploadinfrastructuredata/uploadedinfradata/uploadedinfradata.component';
// const routes: Routes = [];

const routes: Routes = [
  
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  { 
    path: 'home', 
    component: HomeComponent, 
    canActivate: [AuthGuard] 
  },
  {
    path:'pick',
    component:PickComponent
  },
  {
    path:'migrate',
    component:MigrateComponent
  },
  {
    path:'plan',
    component:PlanComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'networkView',
    component:NetworkViewComponent
  },
  {
    path:'count',
    component:CountsListComponent
  },
  {
    path:'analyseStats',
    component:AnalyseStatsComponent
  },
  {
    path:'moveGroupView',
    component:MoveGroupViewComponent
  },
  {
    path:'functionalData/:deviceName',
    component: FunctionalDataComponent
  },
  {
    path:'costComp',
    component: CostComparisionComponent
  },
  {
    path:'migrationSizing',
    component: MigrationSizingComponent
  },
  {
    path:'sitemap',
    component: SitemapComponent
  },
  {
    path:'questionare',
    component:QuestionareComponent
  },
  {
    path:'prepare',
    component:PrepareComponent
  },
  {
    path:'discover',
    component:DiscoverComponent
  },
  {
    path:'recommend',
    component:RecommendComponent
  },
  {
    path:'addquestionare',
    component:AddquestionareComponent
  },
  {
      path:'functionalAppdata/:appName',
      component: FunctionalAppdataComponent
  },
  {
      path:'manualmove',
      component:ManualmovegroupComponent
    },
    {
      path:'listquestionnaire/:id',
      component:ListquestionnaireComponent
    },
    {
      path: 'moveGroup',
      component: MoveGroupSectionComponent
    },
    {
      path: 'wavemoveGroup',
      component: WavemovegroupComponent
    },
    {
      path: 'migrationgrouptarget',
      component: MigrationgrouptargetsizingComponent
    },
  
    {
      path: 'migrationgroupcreate/cloudcost/:id',
      component:  MigrationgroupcreateComponent
    },
    {
      path: 'migrationgroupcreateview/cloud_target_sizing/:id/:i',
      component: MigrationgroupcreateviewComponent,
    },
    {
      path: 'migrationgroupcreateedit/cloud_target_sizing/:id/:i',
      component: MigrationgroupcreateeditComponent,
    },    
    {
      path:'viewquestionare/:id/:i',
      component:ViewquestionareComponent
    },
    {
      path: 'migrationGroup',
      component: MigrationGroupComponent
    },
    {
      path: 'migrationReadyGroup',
      component: MigrationReadyGroupComponent
    },
    {
      path: 'migrationQue',
      component: MigrationQueComponent
    },
    {
      path: 'timeline',
      component: TimelineComponent
    },
    {
      path: 'managementheader',
      component:   ManagementheaderComponent
    },
    {
      path: 'managementdashboard',
      component:   ManagementDashboardComponent
    },
    {
      path: 'managementdataspec',
      component:   ManagementdataspecificComponent,
    },
    {
      path: 'uploadinfras',
      component:   UploadinfrastructuredataComponent,
    },
    {
      path: 'timedash',
      component:  TimelinedashboardComponent,
    },
    {
      path: 'migrationwave',
      component: MigrationwavestatusComponent,
    },
    {
      path: 'hamb',
      component: HamburgericonComponent,
    },
    {
      path: 'infradata/:id',
      component:   UploadedinfradataComponent,
    },
    {
      path: 'graphs',
      component: GraphsComponent,
    },
    {
      path: 'header',
      component: HeaderComponent,
    }
    // ,
    // {
    //   path: 'testConfig',
    //   component: TestConfigComponent
    // }
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
