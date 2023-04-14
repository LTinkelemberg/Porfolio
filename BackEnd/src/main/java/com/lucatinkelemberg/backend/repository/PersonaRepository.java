package com.lucatinkelemberg.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lucatinkelemberg.backend.model.DatosPersonales;

import org.springframework.data.jpa.repository.JpaRepository;
@Repository
public interface PersonaRepository extends JpaRepository<DatosPersonales, Integer> {
    
}
