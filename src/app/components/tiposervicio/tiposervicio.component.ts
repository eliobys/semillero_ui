import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TiposervicioService} from '../../services/tiposervicios/tiposervicios.service';

@Component({
  selector: 'app-tiposervicio',
  templateUrl: './tiposervicio.component.html',
  styleUrls: ['./tiposervicio.component.css']
})
export class TiposervicioComponent implements OnInit {

  tiposervicioForm!: FormGroup ;
  tipohabilidad:any;
  tiposervicio: any;

  constructor(
    public fb: FormBuilder,
    public tiposervicioService :TiposervicioService,
  ) { }

  ngOnInit(): void {
    this.tiposervicioForm = this.fb.group({
      id: [''],
      tipohabilidad:['', Validators.required],
      idusuario:['', Validators.required],
    });

    this.tiposervicioService.getAlltiposervicio().subscribe(resp =>{
      this.tiposervicio = resp;
    },
    error => {console.error(error)}
    );
    
  }
  guardartiposervicio(): void {
    this.tiposervicioService.savetiposervicio(this.tiposervicioForm.value).subscribe(resp =>{
      this.tiposervicioForm. reset();
      this.tiposervicio.push(resp);
    },
    error => {console.error(error)}
    )
  }


}
