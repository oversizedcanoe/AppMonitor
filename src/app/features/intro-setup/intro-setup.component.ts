import { Component, EventEmitter, Output  } from '@angular/core';
import { AppInfo } from 'app-list-capacitor';

@Component({
  selector: 'app-intro-setup',
  templateUrl: './intro-setup.component.html',
  styleUrls: ['./intro-setup.component.scss'],
})
export class IntroSetupComponent {
  welcomePage: number = 1;
  selectAppPage: number = 2;
  completePage: number = 3;
  pageNumber: number = this.welcomePage;
  
  selectedApps: AppInfo[] = [];
  @Output() initialAppsSelectionEvent = new EventEmitter<AppInfo[]>();

  constructor() { }

  onAppSelected(app: AppInfo){
    this.selectedApps.push(app);
  }

  onAppDeselected(app: AppInfo) {
    let currentIndex = this.selectedApps.indexOf(app);

    if(currentIndex > -1) { 
      this.selectedApps.splice(currentIndex, 1)
    } 
  }

  onNextPage() {
    if (this.pageNumber == this.selectAppPage && this.selectedApps.length < 1){
      alert("Please select at least one app to monitor.");
    } else if(this.pageNumber < this.completePage){
      this.pageNumber++;
    } else {
      // Complete
      this.initialAppsSelectionEvent.emit(this.selectedApps);
    }
  }
}
