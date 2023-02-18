package com.example.TiendaComputadoras.Repository;

import com.example.TiendaComputadoras.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InterUsuarioRepository extends JpaRepository<Usuario, Integer> {
}
