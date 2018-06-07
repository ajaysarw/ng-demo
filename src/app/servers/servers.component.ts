import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']  
})
export class ServersComponent implements OnInit {
  @Input('msgForChildComponent') ParentMessage: string = "" ;
  @Output() childEventHandler = new EventEmitter();
  public messageForParent: string = "";

  constructor() {
  }

  ngOnInit() {
  }

  sendToParent(){    
    this.childEventHandler.emit(this.messageForParent);
  }
}
