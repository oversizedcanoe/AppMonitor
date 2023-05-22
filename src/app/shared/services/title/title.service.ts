import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private title: string = '';
  public onTitleChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public setTitle(title: string) : void {
    console.log("Title changed to: " + title)
    this.title = title;
    this.onTitleChanged.emit(this.title);
  }

}
