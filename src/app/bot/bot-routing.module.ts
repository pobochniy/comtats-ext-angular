import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesGuard } from '../roles.guard';
import { UserRoleEnum } from '../shared/enums/user-role.enum';
import { ObserverComponent } from './observer/observer.component';

const routes: Routes = [{
  path: 'bot', children: [
    // { path: '', redirectTo: 'observer', pathMatch: 'full', canActivate: [RolesGuard], data: { allowedRoles: [UserRoleEnum.statsRead, UserRoleEnum.statsRead] } },
    { path: 'observer', component: ObserverComponent, canActivate: [RolesGuard], data: { allowedRoles: [UserRoleEnum.statsRead, UserRoleEnum.statsRead] } },
    // { path: 'edit/:id', component: EditComponent, canActivate: [RolesGuard], data: { allowedRoles: [UserRoleEnum.epicCrud] } },
    // { path: 'details/:id', component: DetailsComponent, canActivate: [RolesGuard], data: { allowedRoles: [UserRoleEnum.epicRead, UserRoleEnum.epicCrud] } }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class BotRoutingModule { }
