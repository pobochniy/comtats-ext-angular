import { Component, OnInit } from '@angular/core';
import { UsersApiService } from '../shared/api/users-api.service';
import { UserService } from '../shared/core/user.service';
import { UserRoleEnum } from '../shared/enums/user-role.enum';
import { UserProfileModel } from '../shared/models/user-profile.model';
import { UserRoleInfoModel } from '../shared/models/user-role-info.model';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css']
})
export class RoleManagementComponent implements OnInit {

  public roles: UserRoleInfoModel[] = [];
  public roleGroups: string[] = [];
  public profiles: UserProfileModel[] = [];
  public userId?: string;
  public userRoles: number[] = [];
  public roleEnum = UserRoleEnum;

  constructor(
    private service: UsersApiService,
    public userService: UserService
  ) {
  }

  async ngOnInit() {
    this.fillRoles();

    for (const role of this.roles) {
      if (!this.roleGroups.includes(role.groupCode)) {
        this.roleGroups.push(role.groupCode);
      }
    }

    this.profiles = await this.service.GetProfiles();
  }

  public async userSelected(val: any) {
    this.userRoles = [];
    if (val && this.userId != val) {
      this.userId = val;
      this.checkRoles();
    }
  }

  public getRolesByGroupCode(group: string): UserRoleInfoModel[] {
    return this.roles.filter(x => x.groupCode == group);
  }

  public CheckAllOptions(group: string) {
    let checkboxes = this.roles.filter(x => x.groupCode == group);

    if (checkboxes.every(val => val.checked == true))
      checkboxes.forEach(val => { val.checked = false });
    else
      checkboxes.forEach(val => { val.checked = true });
  }

  public async saveRoles() {
    if(!this.userId) return;

    const checked = this.roles.filter(x => x.checked).map(x => x.id);
    await this.service.setUserRoles(this.userId, checked);
    await this.checkRoles();
  }

  private async checkRoles() {
    if(!this.userId) return;

    this.userRoles = (await this.service.getUserRoles(this.userId)) || [];
    this.roles.forEach(x => { x.checked = this.userRoles.includes(x.id) });
  }

  private fillRoles() {
    this.roles = [
      new UserRoleInfoModel(UserRoleEnum.roleManagement, 'Role Management', 'roleManagement'),

      new UserRoleInfoModel(UserRoleEnum.persRead, 'Просмотр Карточки бота', 'bot'),
      new UserRoleInfoModel(UserRoleEnum.persCrud, 'Редактирование, содание, удаление бота', 'bot'),

      new UserRoleInfoModel(UserRoleEnum.statsRead, 'Обсервер ботов', 'bot'),
      new UserRoleInfoModel(UserRoleEnum.statsCrud, 'Редактирование, содание, удаление активностей', 'bot'),
    ]
  }
}
