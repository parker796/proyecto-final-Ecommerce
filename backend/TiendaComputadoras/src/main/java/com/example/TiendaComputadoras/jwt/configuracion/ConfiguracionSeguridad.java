package com.example.TiendaComputadoras.jwt.configuracion;

import com.example.TiendaComputadoras.jwt.JwtAccesoDenegadoError;
import com.example.TiendaComputadoras.jwt.JwtAutenticacionError;
import com.example.TiendaComputadoras.jwt.JwtFiltroPeticiones;
import com.example.TiendaComputadoras.Service.DetalleUsuarioImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled = true)
public class ConfiguracionSeguridad {

	@Autowired
	private DetalleUsuarioImpl detalleUsuarioImpl;

	@Autowired
	private JwtAutenticacionError jwtAutenticacionError;
	
	@Autowired
	private JwtAccesoDenegadoError jwtAccesoDenegadoError;

    @Bean
    JwtFiltroPeticiones jwtFiltroPeticiones() {
        return new JwtFiltroPeticiones();
    }

    @Bean
    BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable().authorizeHttpRequests(authConfig -> {
            authConfig.requestMatchers("/usuario/login").permitAll();
            authConfig.requestMatchers("/usuario/crear").permitAll();
            authConfig.anyRequest().authenticated();
           // authConfig.anyRequest().permitAll();
        }).exceptionHandling().authenticationEntryPoint(jwtAutenticacionError).accessDeniedHandler(jwtAccesoDenegadoError).and().sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.userDetailsService(detalleUsuarioImpl);
        http.addFilterBefore(jwtFiltroPeticiones(), UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
