import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/DataService/Data.service';


@Component({
  selector: 'app-europa',
  templateUrl: './europa.component.html',
  styleUrls: ['./europa.component.css']
})
export class EuropaComponent implements OnInit {

  Europa;
  
  constructor(private datos:DataService, private router:Router ) { }

  ngOnInit(): void {
    this.datos.getDatos('https://restcountries.eu/rest/v2/region/Europe')
    .subscribe(
      (data)=>{
         this.Europa=data;        
      }
    );
  } 

}
