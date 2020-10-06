import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../../Services/DataService/Data.service'

@Component({
  selector: 'app-africa',
  templateUrl: './africa.component.html',
  styleUrls: ['./africa.component.css']
})
export class AfricaComponent implements OnInit {

  Africa;
  
  constructor(private datos:DataService, private router:Router ) { }

  ngOnInit(): void {
    this.datos.getDatos('https://restcountries.eu/rest/v2/region/Africa')
    .subscribe(
      (data)=>{
         this.Africa=data;        
      }
    );
  }

  


}
