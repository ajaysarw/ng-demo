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
  private allowdToAdd: boolean = false;
  private onAddCourseText = 'NO text'
  private courseName: string = '';

  constructor(coursesService: CoursesService) {      
    this.coursesList = coursesService.getCoursesList();    
    setTimeout(
      ()=>{
        this.allowdToAdd = true;
      }, 
      2000
    )
  }
  
  ngOnInit() {
  }

  public onClicked(){
    this.onAddCourseText = "added a course" + this.courseName;
  }

  public onKeys(evt: Event){        
    this.courseName = (<HTMLInputElement>evt.target).value;    
  }
}
