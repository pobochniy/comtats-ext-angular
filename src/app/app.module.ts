import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { RoleManagementModule } from './role-management/role-management.module';
import { UserService } from './shared/core/user.service';
import { SharedModule } from './shared/shared.module';
import { UsersApiService } from './shared/api/users-api.service';
import { NavModule } from './shared/nav/nav.module';
import { NavTabsService } from './shared/nav/nav-tabs.service';
import { DatePipe } from '@angular/common';
import { BotModule } from './bot/bot.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    NavModule,
    SharedModule,
    FormsModule,
    AuthModule,
    BotModule,
    RoleManagementModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' }
    ]),

  ],
  providers: [UsersApiService, UserService, NavTabsService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
