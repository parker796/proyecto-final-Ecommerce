package com.example.TiendaComputadoras.model;

import jakarta.persistence.*;


@Entity
public class Rol {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
    @Enumerated(EnumType.STRING)
    private NombreRol nombreRol;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public NombreRol getNombreRol() {
		return nombreRol;
	}

	public void setNombreRol(NombreRol nombreRol) {
		this.nombreRol = nombreRol;
	}
    
    

}
