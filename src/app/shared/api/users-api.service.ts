import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { lastValueFrom } from "rxjs";
import { UserProfileModel } from "../models/user-profile.model";
import { BaseApiService } from "./base-api.service";


@Injectable()
export class UsersApiService extends BaseApiService {
  private storage: UserProfileModel[] = [];

  constructor(public override http: HttpClient) {
    super('Users', http);
  }

  public async GetProfiles() {
    if (!this.storage.length) {
      this.storage = (await lastValueFrom(this.get<any[]>('GetProfiles'))).map(x => new UserProfileModel(x));
    }

    return this.storage;
  }

  public async getUser(userId: string | undefined) {
    if(userId === undefined) return new UserProfileModel();

    const profiles = await this.GetProfiles();
    return profiles.find(x => x.id == userId) || new UserProfileModel();
  }

  public async getUserRoles(userId: string) {
    return this.get<number[]>('GetRoles?userId=' + userId).toPromise();
  }

  public async setUserRoles(userId: string, roles: number[]) {
    return this.post('SetRoles', { userId: userId, roles: roles }).toPromise();
  }

  public async changeUser(model: UserProfileModel) {
    if (!this.storage) return;

    const idx = this.storage.findIndex(x => x.id == model.id);
    if (idx > -1) {
      this.storage.splice(idx, 1);
    }

    this.storage.push(model);
  }
}
