import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BotActivityApiService } from 'src/app/shared/api/bot-activity-api.service';
import { BotActivityModel } from 'src/app/shared/models/bot-activity.model';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css'],
  providers: [BotActivityApiService],
})
export class ObserverComponent {
  public lastUpdated?: Date;
  public dataSource?: BotActivityModel[];

  constructor(
    private service: BotActivityApiService,
    private router: Router,
    public datepipe: DatePipe
  ) {}

  async ngOnInit() {
    await this.refreshData();
    setInterval(() => {
      this.refreshData();
    }, 5000);
  }

  async refreshData() {
    this.dataSource = await this.service.GetList();
    this.lastUpdated = new Date();
  }
}
