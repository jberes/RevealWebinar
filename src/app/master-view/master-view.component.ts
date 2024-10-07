import { Component, OnDestroy, OnInit } from '@angular/core';
import { RevealSdkSettings, RevealViewOptions } from '@revealbi/ui';
import { Subject, takeUntil } from 'rxjs';
import { DashboardNames } from '../models/reveal-webinar/dashboard-names';
import { RevealWebinarService } from '../services/reveal-webinar.service';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit, OnDestroy {
  dashboardOptions: RevealViewOptions = {
    visualizations: {
      menu: {
        copy: false,
        duplicate: false
      }
    }
  };
  private destroy$: Subject<void> = new Subject<void>();
  public dashboardName?: string;
  public revealWebinarDashboardNames: DashboardNames[] = [];

  constructor(
    private revealWebinarService: RevealWebinarService,
  ) {
    RevealSdkSettings.serverUrl = 'https://localhost:7219';
  }

  ngOnInit() {
    this.revealWebinarService.getDashboardNamesList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.revealWebinarDashboardNames = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public listItemClick(item: DashboardNames) {
    this.dashboardName = item.dashboardFileName;
  }
}
