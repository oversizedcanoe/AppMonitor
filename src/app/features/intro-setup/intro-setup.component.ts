import { Component } from '@angular/core';

import { IntroWelcomeComponent } from './intro-welcome/intro-welcome.component';

@Component({
  selector: 'app-intro-setup',
  templateUrl: './intro-setup.component.html',
  styleUrls: ['./intro-setup.component.scss'],
})
export class IntroSetupComponent {
  
  component = IntroWelcomeComponent;

  constructor() { }

  onNavChange($event: any) {
    // TODO: going backwords doesn't update the title back to what they should be, since ngOnInit was already called
    console.log("nav did change called")
    console.log($event);
  }
}
