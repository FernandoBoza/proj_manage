import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { DepartmentsComponent } from './components/pages/departments/departments.component';
import { NotificationsComponent } from './components/pages/notifications/notifications.component';
import { TasksComponent } from './components/pages/tasks/tasks.component';
import { CalendarComponent } from './components/pages/calendar/calendar.component';
import { LoginComponent } from './components/pages/login/login.component';
import { CreateTaskComponent } from './components/shared/create-task/create-task.component';
import { TaskComponent } from './components/shared/task/task.component';
import { InputTextComponent } from './components/shared/input-text/input-text.component';
import { InputSearchComponent } from './components/shared/input-search/input-search.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { InboxComponent } from './components/pages/inbox/inbox.component';
import { SettingsComponent } from './components/pages/settings/settings.component';
import { ImgHolderComponent } from './components/shared/img-holder/img-holder.component';
import { EditProfileComponent } from './components/pages/settings/setting_components/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './components/pages/settings/setting_components/change-password/change-password.component';
import { DatePickerComponent } from './components/shared/date-picker/date-picker.component';
import { DropdownUserComponent } from './components/shared/dropdown-user/dropdown-user.component';
import { TooltipComponent } from './components/shared/tooltip/tooltip.component';
import { TooltipDirective } from './components/shared/tooltip/tooltip.directive';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { FeaturesComponent } from './components/pages/landing-page/features/features.component';
import { NavbarComponent } from './components/pages/landing-page/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ProjectsComponent,
    SettingsComponent,
    InboxComponent,
    DepartmentsComponent,
    NotificationsComponent,
    TasksComponent,
    CalendarComponent,
    LoginComponent,
    CreateTaskComponent,
    TaskComponent,
    InputTextComponent,
    InputSearchComponent,
    ImgHolderComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    DatePickerComponent,
    DropdownUserComponent,
    TooltipComponent,
    TooltipDirective,
    LandingPageComponent,
    FeaturesComponent,
    NavbarComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // entryComponents ComponentFactory for the tooltip
  entryComponents: [TooltipComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
