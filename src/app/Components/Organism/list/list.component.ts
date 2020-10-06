import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from 'src/app/Services/DataService/Data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input () listado:any;
  modificar={
    name:'',
    capital:'',
    region:'',
    subregion:'',
    languages:''
  };
  h_menu:boolean;

  constructor(private datos:DataService) { }

  ngOnInit(): void {
    this.h_menu=true;
  }
  modificacion(i){
    this.h_menu=false;
    console.log(i);
    this.modificar=this.listado[i];
  }

}
