import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { MvdataService } from "../app/mvdata.service";

@NgModule({
  declarations: [
    AppComponent,
    MoviedetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MvdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
