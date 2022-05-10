import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  showMenu:boolean = false;
  navStyle: string ="open";
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.showMenu = !this.showMenu;
    if (!this.showMenu)
    {
      console.log("open menu");
      this.navStyle="open";
      this.showMenu = true;
  }
    else{
      console.log("close menu");
      this.navStyle='closed';
      this.showMenu = false;
    }
  }


}
