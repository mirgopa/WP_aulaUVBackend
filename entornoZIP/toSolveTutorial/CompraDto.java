package es.capgeminiuv.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CompraDto implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;
    private String nombre;
    private Double presupuesto;
    private List<ProductoDto> productos = new ArrayList<ProductoDto>();
    private Date created;

    public CompraDto () {
    }

    public CompraDto(Long id) {
        this.id = id;
    }

    public CompraDto(String nombre) {
        this.nombre = nombre;
    }

    public CompraDto(Long id, String nombre, Double presupuesto, Date created) {
        this.id = id;
        this.nombre = nombre;
        this.presupuesto = presupuesto;
        this.created = created;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Double getPresupuesto() {
        return presupuesto;
    }

    public void setPresupuesto(Double presupuesto) {
        this.presupuesto = presupuesto;
    }

    public List<ProductoDto> getProductos() {
        return productos;
    }

    public void setProductos(List<ProductoDto> productos) {
        this.productos = productos;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }
}
