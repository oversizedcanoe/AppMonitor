import { Component, OnInit } from '@angular/core';

import { IntroCompleteComponent } from '../intro-complete/intro-complete.component';
import { TitleService } from 'src/app/shared/services/title/title.service';
import { AppInfo } from 'app-list-capacitor';

@Component({
  selector: 'app-intro-select',
  templateUrl: './intro-select.component.html',
  styleUrls: ['./intro-select.component.scss'],
})
export class IntroSelectComponent implements OnInit {
  component = IntroCompleteComponent;
  selectedApps: AppInfo[] = [];

  constructor(private titleService: TitleService) {  }
  
  ngOnInit(): void {
    this.titleService.setTitle('Select Apps to Monitor...');
  }

  onAppSelected(app: AppInfo){
    this.selectedApps.push(app);
  }

  onAppDeselected(app: AppInfo) {
    let currentIndex = this.selectedApps.indexOf(app);

    if(currentIndex > -1) { 
      this.selectedApps.splice(currentIndex, 1)
    } 
  }

  onStartClick() {
    
  }
}
