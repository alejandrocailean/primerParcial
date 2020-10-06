import { prepareSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { resolve4 } from 'dns';
import { promise } from 'protractor';
import { DatosPaisesService } from 'src/app/Services/datos-paises.service';
import {DataService} from '../../Services/DataService/Data.service'

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})

export class DetalleComponent implements OnInit {

  nombrePais:string;
  paisElegido;

  
  constructor(private route: ActivatedRoute, private datos: DataService ) { 
    
  }
  ngOnInit(): void {
   
    this.route.queryParams
    .subscribe(data=>{
      this.nombrePais=data.elegido; 
    }); 
    

    this.datos.getDatos('https://restcountries.eu/rest/v2/name/'+this.nombrePais)
    .subscribe(data=>{
     this.paisElegido=data;
    }); 
    
  }

}
