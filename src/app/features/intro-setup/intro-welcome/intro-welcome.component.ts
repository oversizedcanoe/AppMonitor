import { Component, OnInit } from '@angular/core';

import { IntroSelectComponent } from '../intro-select/intro-select.component';
import { TitleService } from 'src/app/shared/services/title/title.service';

@Component({
  selector: 'app-intro-welcome',
  templateUrl: './intro-welcome.component.html',
  styleUrls: ['./intro-welcome.component.scss'],
})
export class IntroWelcomeComponent implements OnInit {
  component = IntroSelectComponent;

  constructor(private titleService: TitleService) { }
  
  ngOnInit(): void {
    this.titleService.setTitle('App Monitor');
  }
}
