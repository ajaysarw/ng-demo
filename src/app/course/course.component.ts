import { Component, OnInit } from '@angular/core';
import { CoursesService } from '@myApp/services/courses.service'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  private title:string = "List of courses"  
  private coursesList: string[];
  private coursesService: CoursesService;

  constructor() {     
      this.coursesService = new CoursesService();
      this.coursesList = this.coursesService.getCoursesList();    
  }
  
  ngOnInit() {
  }
}
