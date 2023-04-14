package com.lucatinkelemberg.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lucatinkelemberg.backend.model.DatosPersonales;
import com.lucatinkelemberg.backend.repository.PersonaRepository;

@Service
public class PersonaService {
    @Autowired
    PersonaRepository personaRepository;
    public void createPersona(DatosPersonales persona) {
        personaRepository.save(persona);
    }
    public DatosPersonales getPersona(Integer id) {
        return personaRepository.findById(id).orElse(null);
    }
}
