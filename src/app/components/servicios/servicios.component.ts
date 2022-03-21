import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Serviciosservice } from '../../services/servicios/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

serviciosForm!: FormGroup;
actualizarForm !:FormGroup;
buscarForm !:FormGroup;
servicios :any;

modal = true;
isAlart = false;
alertMsg = "Pasajero no existe, lo debes registrar";
isAlertSuccess = false;
alertMsgSuccess ="Pasajero encontrado"




  constructor(
    public fb : FormBuilder,
    public serviciosservicios : Serviciosservice,
  ) { }

  ngOnInit(): void {

    this.serviciosForm =  this.fb.group({
      idservicios : [''],
      valorDeServicio : ['',Validators.required],
      estadoServicio : ['',Validators.required],
      idUsuario : ['',Validators.required],
      idHabilidad : ['',Validators.required],
    
    })
      this.serviciosservicios.getAllServicios().subscribe(resp=>{
      this.servicios = resp
    }, error =>{console.error(error)})
    this.actualizarForm = this.fb.group({
      idservicios : [''],
      valorDeServicio : ['',Validators.required],
      estadoServicio : ['',Validators.required],
      idusuario : ['',Validators.required],
      idHabilidad : ['',Validators.required],
    })
    
 
}

editar(servicios:any){
  this.actualizarForm.setValue({
    idservicios: servicios.clienteId,
    valorDeServicio : servicios. valorDeServicio,
    estadoServicio : servicios.estadoServicio,
    idUsuario : servicios.IdUsuario, 
    idHabilidad : servicios.IdHabilidad,
  })

}

actualizar(): void{
  this.serviciosservicios.idtServicios(this.actualizarForm.value).subscribe(resp=>{
    this.actualizarForm.reset();
    this.servicios.push(resp)
    this.actualizarForm.disable();
    this.cerrarModal()
  },error =>{console.error(error)})
}

cerrarModal() {
  setTimeout(() => {
    this.modal = false;
  }, 1000);
}
}