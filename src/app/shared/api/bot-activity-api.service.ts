import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { BotActivityModel } from "../models/bot-activity.model";
import { BaseApiService } from "./base-api.service";

@Injectable()
export class BotActivityApiService extends BaseApiService {
  constructor(public override http: HttpClient) {
    super('BotActivity', http)
  }

  public async GetList() {
    return this.get<BotActivityModel[]>('GetList').toPromise();
  }
}
