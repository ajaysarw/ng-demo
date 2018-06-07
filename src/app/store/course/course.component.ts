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
  private onCourseAddText = ''
  private courseName: string = '';
  private messageForChildComponent = '';


  constructor(coursesService: CoursesService) {
    this.coursesService = coursesService;
    this.getCourseList();
    setTimeout(
      ()=>{
        this.allowdToAdd = true;
      }, 
      1000
    )
  }
  
  ngOnInit() {
  }

  public onCourseAdd(){
    if (this.courseName) {
     this.onCourseAddText = "added a course: " + this.courseName;
      this.coursesList.push(this.courseName)
    }
  }

  public clearCourseList(){    
    this.coursesList = [];
  }

  public refresCourseList(){    
    this.getCourseList();
  }

  public onKeys(evt: Event){        
    this.courseName = (<HTMLInputElement>evt.target).value;    
  }

  public getColor(){        
    return this.onCourseAddText?"green":"red";
  } 
  
  public getCourseList(){
    this.coursesList = this.coursesService.getCoursesList();
  }
}
