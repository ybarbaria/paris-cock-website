import { YoutubeService } from '../services/youtube.service';
import { HomeService } from './home.service';
import { Component, OnInit, Input, Output, ViewEncapsulation, NgZone } from '@angular/core';
import { MnFullpageDirective, MnFullpageService, MnFullpageOptions } from "ng2-fullpage";

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  name: string;
  video: any = { id: 'AhkoTsE0ZS4' };
  baseUrl: string = 'https://www.youtube.com/embed/';
  url: any;
  private _navBarClassName: string = "bg-inverse"
  private _backgroundTransparent: string = "transparent";
  private _backgroundBlueIndigo: string = "#3F51B5";
  private _navBar = document.getElementsByClassName(this._navBarClassName)[0];
  constructor(private sanitizer: DomSanitizer, private fullpageService: MnFullpageService) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id + "?autoplay=1&loop=1&modestbranding=1&playsinline=0autohide=1&showinfo=0&controls=0");
    var self = this;
    this.setColor(this._navBar, this._backgroundTransparent);
  }

  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
    controlArrows: false,
    scrollingSpeed: 1000,

    menu: '.menu',
    css3: true,
    anchors: [
      'subMenu1', 'subMenu2', 'subMenu3',
      'subMenu4', 'subMenu5', 'subMenu6'
    ],
    onLeave: (index, nextIndex) => {
      this.showNavBarBackground(index, nextIndex);
    }
    // function (index, nextIndex, direction) {
    //   var self = this;
    //   debugger;
    //   self.showNavBarBackground(index, nextIndex);
    // }
  });

  ngOnInit() {

  }
  ngOnChanges() {

  }

  showNavBarBackground(currentIndex: number, nextIndex: number): void {
    if (nextIndex > 1)
      this.setColor(this._navBar, this._backgroundBlueIndigo);
    else if (nextIndex == 1)
      this.setColor(this._navBar, this._backgroundTransparent);
  }

  setColor(element, color: string) {
    element.style.backgroundColor = color;
  }

  ngOnDestroy() {
    this.fullpageService.destroy('all');
    this.setColor(this._navBar, this._backgroundBlueIndigo);
  }
}
