package com.example.TiendaComputadoras.Repository;

import com.example.TiendaComputadoras.model.Usuario;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {

	@Query("SELECT u FROM Usuario u LEFT JOIN FETCH u.rol r WHERE u.nombreUsuario = :nombreUsuario")
	public Optional<Usuario> buscarPorNombreUsuario(String nombreUsuario);
	
}
