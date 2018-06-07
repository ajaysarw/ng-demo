import { Component, OnInit } from '@angular/core';
import { CoursesService } from '@myApp/services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Hello World';   
  // public eventHandler;
  public courseDetail = "";
  public CoursesService;

  public msgFromChildComponent =""
  
  constructor(CoursesService: CoursesService) {    
    this.CoursesService = CoursesService;
  }
  onInit(){
  }
  
  modiResponse (eventData) {    
    this.msgFromChildComponent = eventData;
    // load any page freom here // call any api blah blah    
    this.courseDetail = this.CoursesService.getCoursesDetails(eventData);

  }
}
