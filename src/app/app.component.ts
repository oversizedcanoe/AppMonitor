import { Component, OnInit } from '@angular/core';
import { AppInfo, AppList, AppListQueryParams } from 'app-list-capacitor';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  apps: AppInfo[] = [];
  
  constructor() {
    
  }

  async ngOnInit() {
    let allApps = (await AppList.getInstalledApps(new AppListQueryParams())).installedApps;
    this.apps = allApps.sort((app1, app2) => app1.name.localeCompare(app2.name));
  }
}
