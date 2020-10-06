import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmericaComponent } from './Components/america/america.component';
import { EuropaComponent } from './Components/europa/europa.component';
import { AfricaComponent } from './Components/africa/africa.component';
import { AsiaComponent } from './Components/asia/asia.component';
import { DetalleComponent } from './Components/detalle/detalle.component';
import { ContinentesComponent } from './Components/continentes/continentes.component';
import { DatosPaisesService } from './Services/datos-paises.service';
import { DataService } from './Services/DataService/Data.service';
import { ListComponent } from './Components/Organism/list/list.component';
import { NavComponent } from './Components/Organism/Nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    AmericaComponent,
    EuropaComponent,
    AfricaComponent,
    AsiaComponent,
    DetalleComponent,
    ContinentesComponent,
    ListComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule,
    HttpClientModule
  ],
  providers: [DatosPaisesService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
