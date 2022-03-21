package com.example.ApiSemillero.controllers;


import com.example.ApiSemillero.models.TipoServicio;
import com.example.ApiSemillero.services.ServiceTipoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TipoServicioController {
    @Autowired
    ServiceTipoServicio serviceTipoServicio;

    @GetMapping ("/getTipoDeServicios")
    public List<TipoServicio>getTipoServicio(){return  serviceTipoServicio.obtenerTipoServicio();}

    @PostMapping("/postTipoServicio")
    public TipoServicio guardarTipoServicio (@RequestBody TipoServicio tipoServicio) { return  serviceTipoServicio.crearServicios(tipoServicio);}
}
