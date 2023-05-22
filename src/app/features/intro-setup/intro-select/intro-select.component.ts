import { Component, OnInit } from '@angular/core';

import { IntroCompleteComponent } from '../intro-complete/intro-complete.component';
import { TitleService } from 'src/app/shared/services/title/title.service';

@Component({
  selector: 'app-intro-select',
  templateUrl: './intro-select.component.html',
  styleUrls: ['./intro-select.component.scss'],
})
export class IntroSelectComponent implements OnInit {
  component = IntroCompleteComponent;

  constructor(private titleService: TitleService) {  }
  
  ngOnInit(): void {
    this.titleService.setTitle('Select Apps');
  }
}
