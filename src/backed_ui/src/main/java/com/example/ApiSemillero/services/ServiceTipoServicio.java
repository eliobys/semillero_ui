package com.example.ApiSemillero.services;


import com.example.ApiSemillero.models.TipoServicio;
import com.example.ApiSemillero.repositories.TipoServicioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ServiceTipoServicio {
    @Autowired
    TipoServicioRepository tipoServicioRepository;

    public ArrayList<TipoServicio> obtenerTipoServicio() {return (ArrayList<TipoServicio>) tipoServicioRepository.findAll();
    }

    public  TipoServicio crearServicios(TipoServicio tipoServicio) { return tipoServicioRepository.save(tipoServicio); }
}
