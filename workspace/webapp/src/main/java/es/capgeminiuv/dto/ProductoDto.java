package es.capgeminiuv.dto;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ProductoDto implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;
    private String nombre;
    private String image;
    private Double precio;

    public ProductoDto() {
    }

    public ProductoDto(Long id) {
        this.id = id;
    }

    public ProductoDto(String nombre) {
        this.nombre = nombre;
    }

    public ProductoDto(Long id, String nombre, String image, Double precio) {
        this.id = id;
        this.nombre = nombre;
        this.image = image;
        this.precio = precio;
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }
}
