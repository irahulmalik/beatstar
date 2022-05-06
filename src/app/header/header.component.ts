import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navStyle:String = 'menu-default';
  menuShow: boolean=false;
  constructor() { }
  
  ngOnInit(): void {}
  
  showMenu(){
    if (!this.menuShow)
    {
      console.log("open menu");
      this.navStyle="menu";
      this.menuShow = true;
  }
    else{
      console.log("close menu");
      this.navStyle='menu-default';
      this.menuShow = false;
    }
  }

}
