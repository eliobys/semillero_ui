package com.example.ApiSemillero.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table (name = "Servicios")

public class Servicio {
    @Id
    @GeneratedValue ( strategy = GenerationType.IDENTITY)
    @Column (unique = true , nullable = false)
    private int idServicios;

    @Column
    private int valorDeServicio;

    @Column
    private String estadoDeServicio;

    @Column
    private int idUsuario;

    @Column
    private int idHabilidad;

    @Column
    private int codHacedor;
}
