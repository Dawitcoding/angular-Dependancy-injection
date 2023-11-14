import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './header/home/hero/hero.component';
import { SidebarComponent } from './header/home/sidebar/sidebar.component';
import { HomeComponent } from './header/home/home.component';
import { SubscribeService } from './Service/subscribe.service';
import { AdminComponent } from './header/admin/admin.component';
import { UserDetailComponent } from './header/admin/user-detail/user-detail.component';
import { UserListComponent } from './header/admin/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './Service/user.service';
import { LoggerService } from './Service/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    SidebarComponent,
    HomeComponent,
    AdminComponent,
    UserDetailComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SubscribeService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
