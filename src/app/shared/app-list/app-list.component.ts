import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppInfo, AppList, AppListQueryParams } from 'app-list-capacitor';

@Component({
  selector: 'app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss'],
})

export class AppListComponent implements OnInit {
  @Output() appSelected = new EventEmitter<AppInfo>();
  @Output() appDeselected = new EventEmitter<AppInfo>();

  public highlightColor: string = "primary";

  apps: AppInfo[] = [];
  selectedApps: AppInfo[] = []

  constructor() { }

  async ngOnInit() {
    let allApps = (await AppList.getInstalledApps(new AppListQueryParams())).installedApps;
    this.apps = allApps.sort((app1, app2) => app1.name.localeCompare(app2.name));
  }

  onAppClick (app: AppInfo) { 
    let currentIndex = this.selectedApps.indexOf(app);

    if(currentIndex > -1) { 
      this.selectedApps.splice(currentIndex, 1)
      this.appDeselected.emit(app);
    } else {
      this.selectedApps.push(app);
      this.appSelected.emit(app);
    }
  }

  isSelected (app: AppInfo){
    return this.selectedApps.indexOf(app) > -1;
  }
}
