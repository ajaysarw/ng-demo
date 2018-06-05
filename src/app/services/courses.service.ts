import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  public getCoursesList(){
    return ["Angular","Symfony", "PHP", "Spring"];
  }
}
