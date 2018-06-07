import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CoursesService } from '@myApp/services/courses.service'



@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
  private links: string[] = [];  
  
  
  
  @Output() eventHr = new EventEmitter();

  constructor(coursesService: CoursesService) { 
    this.links = coursesService.getCoursesList();
  }

  ngOnInit() {
  }

  sendToParent(data){
    this.eventHr.emit(data.target.innerText);
    //console.log(data.target.innerText);

  }
}
