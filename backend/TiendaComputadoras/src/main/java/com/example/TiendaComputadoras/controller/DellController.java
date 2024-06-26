package com.example.TiendaComputadoras.controller;

import com.example.TiendaComputadoras.DTO.DTOApple;
import com.example.TiendaComputadoras.DTO.DTODell;
import com.example.TiendaComputadoras.DTO.UsuarioDTO;
import com.example.TiendaComputadoras.DTO.UsuarioLoginDTO;
import com.example.TiendaComputadoras.Service.INServDell;
import com.example.TiendaComputadoras.Service.ServiceDell;
import com.example.TiendaComputadoras.Service.UsuarioService;
import jakarta.validation.ConstraintViolationException;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.NoHandlerFoundException;

import java.net.URI;
import java.util.*;


@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/usuario")
public class DellController {
    //igual lo mismo inyectamos la dependencia del servicio correspondiente
    private INServDell serviceDell;//polimorfismo cambiamos de estado en el objeto
    private UsuarioService usuarioService;

    @Autowired //este no es necesario la cereza del pastel de inyeccion de dependencias
    public DellController(INServDell serviceDell, UsuarioService usuarioService) {

        this.serviceDell = serviceDell;
        this.usuarioService = usuarioService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody UsuarioLoginDTO usuarioLogin, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<String>("El usuario y la clave son obligatorios", HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<UsuarioDTO>(usuarioService.login(usuarioLogin), HttpStatus.OK);

    }

    @PostMapping("/crear")
    public ResponseEntity<?> crear(@Valid @RequestBody UsuarioDTO usuario, BindingResult validaciones)
            throws Exception {

        if (validaciones.hasErrors()) {
            return new ResponseEntity<String>("Campos Imcompletos", HttpStatus.BAD_REQUEST);
        }

        try {
            return new ResponseEntity<UsuarioDTO>(usuarioService.crear(usuario), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/dell")
    @PreAuthorize("hasAuthority('ADMINISTRADOR') || hasAuthority('USUARIO_COMUN')")
    public ResponseEntity<?> list() {
        return ResponseEntity.ok().body(serviceDell.findAll());//construimos ya el json para el fronted 200
    }

    @GetMapping("/dell/{id}")
    @PreAuthorize("hasAuthority('ADMINISTRADOR') || hasAuthority('USUARIO_COMUN')")
    public ResponseEntity<?> view(@PathVariable Long id) {
        List<DTODell> o = serviceDell.findAllById(id);
        if (o == null) {
           // return ResponseEntity.notFound().build();//404
            //throw new ResponseStatusException(HttpStatus.NOT_FOUND, "El equipo Dell con el id especificado no existe.");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El equipo Dell con el id especificado no existe.");
        }
       // return (ResponseEntity<?>) serviceDell.findAllById(id);
       // return ResponseEntity.ok(o.get(0)); //200
        return ResponseEntity.ok().body(serviceDell.findAllById(id));
    }

    @PostMapping("/dellCrear")
    @PreAuthorize("hasAuthority('ADMINISTRADOR') || hasAuthority('USUARIO_COMUN')")
    public ResponseEntity<?> create(@RequestBody DTODell data) {
        DTODell dtoDell = serviceDell.save(data);
        return ResponseEntity.status(HttpStatus.CREATED).body(dtoDell); //201
    }

    @PutMapping("/dellEditar/{id}")
    @PreAuthorize("hasAuthority('ADMINISTRADOR')")
   public ResponseEntity<?> edit(@RequestBody DTODell dell, @PathVariable Long id){
       List<DTODell> o = serviceDell.findAllById(id);
       if(o == null){
         //  return ResponseEntity.notFound().build(); //404
           return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El equipo Dell con el id especificado no existe.");
       }
       serviceDell.updateDell(dell);
       // return ResponseEntity.ok(o.get(0)); //200
        return ResponseEntity.ok().body(serviceDell.findAll());
   }
    @DeleteMapping("/dellBorrar/{id}")
    @PreAuthorize("hasAuthority('ADMINISTRADOR')")
    public ResponseEntity<?> delete(@PathVariable Long id){
        List<DTODell> o = serviceDell.findAllById(id);
        if(o == null){
            //  return ResponseEntity.notFound().build(); //404
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El equipo Dell con el id especificado no existe.");
        }
        serviceDell.deleteById(id);
        //return (ResponseEntity<?>) ResponseEntity.noContent().build();//204 no hay contenido
        return ResponseEntity.ok().body(serviceDell.findAll());
    }

   //dejamos pendiente el controllerAdviceException para todo los controladores
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(
            MethodArgumentNotValidException ex) {

        Map<String, String> errors = new HashMap<>();

        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });

        return errors;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(HttpMessageNotReadableException.class)
    public Map<String, Object> handleValidationExceptions2(
            HttpMessageNotReadableException ex) {
        Map<String, Object> map = new HashMap<>();
      //  map.put("message", ex.getMessage());
        map.put("mensaje", " Se espera que ingreses datos en formato json con sus respectivas comillas, la llave y el valor");
        logger.warn("No se creo el elemento hubo una excepcion a la ahora de guardar el dato");
        map.put("timestamp", new Date());
        return map;
    }

    private static Logger logger = LoggerFactory.getLogger(DellController.class);
    @ExceptionHandler(value = ConstraintViolationException.class)
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    public Map<String, Object> handleException(Exception ex) {
        Map<String, Object> map = new HashMap<>();
        map.put("message", " Se espera que ingreses los datos de manera correcta checar el mensaje en cuanto a la validacion pedida: " + ex.getMessage());
        logger.warn("No se creo el elemento hubo una excepcion a la ahora de guardar el dato");
        map.put("timestamp", new Date());
        return map;
    }

    @ExceptionHandler(NoHandlerFoundException.class)
    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    public Map<String, Object> handleNoHandlerFoundException(NoHandlerFoundException ex) {
        Map<String, Object> m = new HashMap<String, Object>();
        m.put("exception", ex.getMessage());
        m.put("errorcode", "404");
        return m;
    }

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(NullPointerException.class)
    public String manejaNullPointerException(NullPointerException npe){
        return "Ocurrió un error en el servidor al procesar la petición";
    }




}
