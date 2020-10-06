import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfricaComponent } from './Components/africa/africa.component';
import { AmericaComponent } from './Components/america/america.component';
import { AsiaComponent } from './Components/asia/asia.component';
import { ContinentesComponent } from './Components/continentes/continentes.component';
import { DetalleComponent } from './Components/detalle/detalle.component';
import { EuropaComponent } from './Components/europa/europa.component';

const routes: Routes = [
  {path:'', component:ContinentesComponent,
    children:[
      {path:'africa',component:AfricaComponent},
      {path:'america',component:AmericaComponent},
      {path:'asia',component:AsiaComponent},
      {path:'europa',component:EuropaComponent},
      {path:'detalle',component:DetalleComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
