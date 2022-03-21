package com.example.ApiSemillero.repositories;


import com.example.ApiSemillero.models.TipoServicio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TipoServicioRepository extends JpaRepository<TipoServicio,Integer> {

}
