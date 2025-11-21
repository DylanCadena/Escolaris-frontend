import { Routes } from '@angular/router';
import { HomeLandingComponent } from './features/pages/home-landing/home-landing.component';
import { LoginComponent } from './features/pages/login/login.component';
import { RegisterComponent } from './features/pages/register/register.component';
import { DashboardComponent } from './features/pages/dashboard/dashboard.component';
import { HomeComponent } from './features/pages/dashboard/home/home.component';
import { UploadGradesComponent } from './features/pages/dashboard/upload-grades/grades.component';
import { RegisterGradesComponent } from './features/pages/dashboard/register-grades/register-grades.component';
import { GroupsComponent } from './features/pages/dashboard/groups/groups.component';
import { GradesManagementComponent } from './features/pages/dashboard/grades-management/grades-management.component';
import { ReportsComponent } from './features/pages/dashboard/reports/reports.component';
import { SettingsComponent } from './features/pages/dashboard/settings/settings.component';

export const routes: Routes = [
  { path: '', component: HomeLandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'groups', component: GroupsComponent },
      { path: 'upload-grades', component: UploadGradesComponent },
      { path: 'register-grades', component: RegisterGradesComponent },
      { path: 'grades', component: GradesManagementComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];
