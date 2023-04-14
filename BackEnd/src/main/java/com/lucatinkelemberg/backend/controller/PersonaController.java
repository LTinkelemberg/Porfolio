package com.lucatinkelemberg.backend.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lucatinkelemberg.backend.model.DatosPersonales;
import com.lucatinkelemberg.backend.service.PersonaService;

@RestController
public class PersonaController {
    @Autowired
    PersonaService service;

    @GetMapping("/saludar")
    public String saludar() {
        return "bienvenidos a mi nuevo Controller";
    }
    @GetMapping("/persona")
    public DatosPersonales getPersona(@RequestParam Integer id) {
        return service.getPersona(id);
    }
    @PostMapping("/persona")
    public void createPersona(@RequestBody DatosPersonales persona) {
        service.createPersona(persona);
    }

}
