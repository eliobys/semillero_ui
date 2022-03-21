package com.example.ApiSemillero.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "Usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private int idUsuario;

    @Column
    private String rol;
/*
    @Column
    private Integer idHabilidades;
*/
    @Column
    private String nombre;

    @Column
    private String apellidos;

    @Column
    private int numeroDeTelefono;

    @Column
    private String tipoDeDocumento;

    @Column
    private int cedula;

    @Column
    private String direccion;

    @Column
    private String correoElectronico;

    @Column
    private String ciudadDeResidencia;

    @Column
    private String contrasena;

    @OneToMany(mappedBy = "usuario", orphanRemoval = true)
    @JsonIgnoreProperties(value="usuario")
    private List<TipoServicio> tipoServicioList;
}
