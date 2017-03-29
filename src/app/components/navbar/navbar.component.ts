import { ROUTES } from './../../app.routes';
import { Component, OnInit } from '@angular/core';
// import { ROUTES } from './navbar-routes.config';
import { MenuType } from './navbar.metadata';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public menuItems: any[];
  public brandMenu: any;
  isCollapsed = true;
    private _navBarClassName: string = "bg-inverse"
  private _backgroundTransparent: string = "transparent";
  private _backgroundBlueIndigo: string = "#3F51B5";
  private _navBar = document.getElementsByClassName(this._navBarClassName)[0];
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND);
    this.brandMenu = ROUTES.filter(menuItem => menuItem.menuType === MenuType.BRAND)[0];
  }

  public get menuIcon(): string {
    return this.isCollapsed ? '☰' : '✖';
  }

  public getMenuItemClasses(menuItem: any): boolean {
    return false;
    // return {
    //   'pull-xs-right': this.isCollapsed && menuItem.menuType === MenuType.RIGHT
    // };
  }
}
