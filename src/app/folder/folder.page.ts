import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AppList, AppInfo} from 'app-list-capacitor'

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  async thing(){
    const res = await AppList.getInstalledApps();

    let names: string[] = [];

    let appList: AppInfo[] = res.installedApps;

    console.log("TEST123", typeof(appList))
    console.log("TEST456", JSON.stringify(appList))

    for (let index = 0; index < appList.length; index++) {
      const element = appList[index];
      names.push(element.name)
    }

    alert(names.join('\n'));
  }
}
