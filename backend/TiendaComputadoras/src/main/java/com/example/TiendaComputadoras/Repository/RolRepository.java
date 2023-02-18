package com.example.TiendaComputadoras.Repository;

import com.example.TiendaComputadoras.model.NombreRol;
import com.example.TiendaComputadoras.model.Rol;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;


public interface RolRepository extends CrudRepository<Rol, Long> {
	Optional<Rol> findByNombreRol(NombreRol nombreRol);
}
