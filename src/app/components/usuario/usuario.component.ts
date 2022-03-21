import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { TiposervicioService } from '../../services/tiposervicios/tiposervicios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  usuarioForm!: FormGroup;
  tiposervicioForm:any;
  usuario: any;
  servicios: any;

  constructor(public fb: FormBuilder, 
    public usuarioService: UsuarioService, 
    public tiposervicios: TiposervicioService
    ) {}

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      IdUsuario: [''],
      rol: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      numerodetelefono: ['', Validators.required],
      tipodedocumento: ['', Validators.required],
      cedula: ['', Validators.required],
      direccion: ['', Validators.required],
      correo_electronico: ['', Validators.required],
      Ciudadderesidencia: ['', Validators.required],
      contrasena: ['', Validators.required],
    });
    this.usuarioService.getAllusuario().subscribe(resp =>{
      this.usuario = resp;
      
    },
     error => {console.error(error)}
    );
    this.tiposervicioForm = this.fb.group({
      tipohabilidad: ['', Validators.required],
      idUsuario: ['', Validators.required],
    });
    this.tiposervicios.getAlltiposervicio().subscribe(
      (resp: any) => {
        console.table(resp)
        this.servicios = resp;
      },
      (err: any) => console.log(err)
    );
  }

  guardar(): void {
    this.usuarioService.saveUsuario(this.usuarioForm.value).subscribe(
      (resp: any) => {
        this.usuarioForm.reset();
        // this.usuario.push(resp);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  // guardarservicio(): void {
  //   this.tiposervicios.saveCliente(this.tiposervicioForm.value).subscribe(
  //     (resp: any) => {
  //       this.tiposervicioForm.reset();
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     }
  //   );
  // }
}
