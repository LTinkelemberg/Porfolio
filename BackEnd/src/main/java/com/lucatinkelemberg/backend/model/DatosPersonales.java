package com.lucatinkelemberg.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class DatosPersonales {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Integer idPersona;
    String nombre;
    String apellido;
    String lugarDeResidencia;
    String email;
    String cuentaLinkedin;
    String aboutMe;    
}
