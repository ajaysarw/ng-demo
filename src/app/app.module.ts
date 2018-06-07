import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from '@myApp/header/header.component';
import { FormsModule } from '@angular/forms';
import { ServersComponent } from '@myApp/servers/servers.component';
import { LeftNavComponent } from '@myApp/left-nav/left-nav.component';
import { RightNavComponent } from '@myApp/right-nav/right-nav.component';
import { FooterComponent } from '@myApp/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent,
    ServersComponent,
    LeftNavComponent,    
    RightNavComponent,
    FooterComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
