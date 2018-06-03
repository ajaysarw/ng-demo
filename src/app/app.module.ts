import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { HelpLinksComponent } from '@myApp/help-links/help-links.component'
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    HelpLinksComponent,
    HeaderComponent    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
