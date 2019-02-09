import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { MvdataService } from "../app/mvdata.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Our array of clients
  clients: any[];
  dataTable: any;


  constructor(private http: HttpClient, private chRef: ChangeDetectorRef, private mvdataService: MvdataService) {

  }

  ngOnInit() {
    //service for get data
    this.mvdataService.getJSON().subscribe(data => {
      console.log(data)
      this.clients = data;

      this.chRef.detectChanges();

      const table: any = $('table');
      this.dataTable = table.DataTable();
    });
  }

  public open(movie) {
    console.log("Moview=====", movie)

  }

}
