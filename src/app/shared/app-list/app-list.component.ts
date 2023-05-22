import { Component, OnInit } from '@angular/core';
import { AppInfo, AppList, AppListQueryParams } from 'app-list-capacitor';

@Component({
  selector: 'app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss'],
})
export class AppListComponent  implements OnInit {

  apps: AppInfo[] = [];
  
  constructor() { }

  async ngOnInit() {
    let allApps = (await AppList.getInstalledApps(new AppListQueryParams())).installedApps;
    this.apps = allApps.sort((app1, app2) => app1.name.localeCompare(app2.name));
  }

}
