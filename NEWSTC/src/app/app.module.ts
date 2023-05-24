import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import {HttpClientModule} from '@angular/common/http';
import {TcnewsapiService} from './service/tcnewsapi.service';
import { TechComponent } from './tech/tech.component';
import { BusinessComponent } from './business/business.component'
@NgModule({
  declarations: [
    AppComponent,
    TopheadlineComponent,
    TechComponent,
    BusinessComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TcnewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
