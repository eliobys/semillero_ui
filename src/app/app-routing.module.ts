import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from '../../src/app/components/usuario/usuario.component'
import {ServiciosComponent} from '../../src/app/components/servicios/servicios.component';
import {TiposervicioComponent} from '../../src/app/components/tiposervicio/tiposervicio.component'


const routes: Routes = [  
  {path: 'usuario', component: UsuarioComponent},
  {path: 'servicio', component: ServiciosComponent},
  {path: 'tiposervicio', component: TiposervicioComponent},
  {path: '**', pathMatch:'full' , redirectTo: 'usuario'} 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
