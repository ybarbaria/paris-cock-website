import { YoutubeService } from '../services/youtube.service';
import { HomeService } from './home.service';
import { Component, OnInit, Input, Output, ViewEncapsulation, NgZone } from '@angular/core';
import { MnFullpageDirective, MnFullpageService, MnFullpageOptions } from "ng2-fullpage";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  constructor(private fullpageService: MnFullpageService) {
  }

  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
    controlArrows: false,
    scrollingSpeed: 1000,

    menu: '.menu',
    css3: true,
    anchors: [
      'menuAnchor1', 'menuAnchor2', 'menuAnchor3',
      'menuAnchor4', 'menuAnchor5', 'menuAnchor6'
    ]
  });

  ngOnInit() {
  }
  ngOnChanges() {
  }
 
  ngOnDestroy() { this.fullpageService.destroy('all'); }
}
