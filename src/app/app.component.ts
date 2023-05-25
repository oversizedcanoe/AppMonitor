import { Component, OnInit, NgZone } from '@angular/core';
import { TitleService } from './shared/services/title/title.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  showIntroSetupPage: Boolean = false;
  appTitle: string = "App Monitor";

  constructor(private titleService: TitleService, private ngZone: NgZone) {
    titleService.onTitleChanged.subscribe((newTitle: string) => {
      // This is all required to prevent appTitle from being changed after the changes have been detected/set by Angular. Lame.
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this.ngZone.run(() => {
            this.appTitle = newTitle;
          })
        })
      })
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
