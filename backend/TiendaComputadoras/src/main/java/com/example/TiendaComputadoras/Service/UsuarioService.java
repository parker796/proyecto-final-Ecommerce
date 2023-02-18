package com.example.TiendaComputadoras.Service;


import com.example.TiendaComputadoras.DTO.UsuarioDTO;
import com.example.TiendaComputadoras.DTO.UsuarioLoginDTO;

public interface UsuarioService {
	public UsuarioDTO login(UsuarioLoginDTO usuarioLoginDTO);

	public UsuarioDTO crear(UsuarioDTO usuarioDTO) throws Exception;

	
}
