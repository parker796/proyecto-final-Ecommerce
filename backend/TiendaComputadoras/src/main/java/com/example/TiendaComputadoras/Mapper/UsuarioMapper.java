package com.example.TiendaComputadoras.Mapper;

import com.example.TiendaComputadoras.DTO.UsuarioDTO;
import com.example.TiendaComputadoras.model.Usuario;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UsuarioMapper {

	@Mapping(source = "rol.nombreRol", target = "rol")
	public UsuarioDTO toUsuarioDTO(Usuario usuario);
	
	@Mapping(target = "authorities", ignore = true)
	public Usuario toUsuario(UsuarioDTO usuarioDTO);
	
}
