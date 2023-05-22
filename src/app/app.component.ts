import { Component, OnInit } from '@angular/core';
import { AppInfo, AppList } from 'app-list-capacitor';

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
    let allApps = (await AppList.getInstalledApps()).installedApps;
    allApps.sort((app1, app2) => app1.name.localeCompare(app2.name));
    // We only care about non-system apps or system apps which have been updated (pre-installed, such as GMail)
    this.apps = allApps.filter((app) => app.isSystemApp == false || app.isUpdatedSystemApp == true);
  }
}
