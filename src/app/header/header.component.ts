import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {  
  private title: string = 'Angular-header'
  private subHeadline: string = 'This is a sub-headline'  
  constructor() {}
  ngOnInit() {
  }
  public getTitle()  {
      return this.title;
  }
  public getSubHeadline()  {
      return this.subHeadline;
  }
}
