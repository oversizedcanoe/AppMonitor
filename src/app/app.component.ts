import { Component, OnInit } from '@angular/core';
import { TitleService } from './shared/services/title/title.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  showIntroSetupPage: Boolean = false;
  appTitle: string = "App Monitor";

  constructor(private titleService: TitleService) {
    titleService.onTitleChanged.subscribe((newTitle: string) => {
      this.appTitle = newTitle;
    })
  }

  ngOnInit(): void {
    let userHasUsedAppBefore: Boolean = false; // Query database or storage or something to check

    if (userHasUsedAppBefore == false) {
      this.showIntroSetupPage = true;
    }

    // Need to decide what to show the user when loading.
    // If they have never used the app before, show them intro/walkthrough
    // If they have, show them... a dashboard? Not sure yet
  }


}
