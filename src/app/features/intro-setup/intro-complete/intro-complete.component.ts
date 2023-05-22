import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title/title.service';

@Component({
  selector: 'app-intro-complete',
  templateUrl: './intro-complete.component.html',
  styleUrls: ['./intro-complete.component.scss'],
})
export class IntroCompleteComponent implements OnInit {
  component = IntroCompleteComponent;

  constructor(private titleService: TitleService) {  }

  ngOnInit(): void {
    this.titleService.setTitle('Complete');
  }
}
