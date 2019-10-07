import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { DepartmentsComponent } from './components/pages/departments/departments.component';
import { NotificationsComponent } from './components/pages/notifications/notifications.component';
import { TasksComponent } from './components/pages/tasks/tasks.component';
import { CalendarComponent } from './components/pages/calendar/calendar.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { InboxComponent } from './components/pages/inbox/inbox.component';
import { SettingsComponent } from './components/pages/settings/settings.component';
import { AuthGuard } from './auth/auth.guard';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { FeaturesComponent } from './components/pages/landing-page/features/features.component';


const routes: Routes = [
  { path: "", component: LandingPageComponent, data: { title: 'Taeki' } },
  { path: "features", component: FeaturesComponent, data: { title: 'Taeki - Features' } },
  { path: "login", component: LoginComponent, data: { title: 'Login' } },
  { path: "register", component: LoginComponent, data: { title: 'Register' } },
  { path: "dashboard", canActivate: [AuthGuard], component: AdminComponent },
  { path: "projects", canActivate: [AuthGuard], component: ProjectsComponent },
  { path: "departments", canActivate: [AuthGuard], component: DepartmentsComponent },
  { path: "tasks", canActivate: [AuthGuard], component: TasksComponent },
  { path: "inbox", canActivate: [AuthGuard], component: InboxComponent },
  { path: "notifications", canActivate: [AuthGuard], component: NotificationsComponent },
  { path: "calendar", canActivate: [AuthGuard], component: CalendarComponent },
  { path: "settings", canActivate: [AuthGuard], component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
