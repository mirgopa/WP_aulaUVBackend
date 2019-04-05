package es.capgeminiuv.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "COMPRA")
public class Compra implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "CompraGenerator")
    @SequenceGenerator(name = "CompraGenerator", sequenceName = "S_Compra")
    private Long id;

    @Column(name = "NOMBRE")
    private String nombre;

    // Cascade sólo para PERSIST y MERGE, porque si borro la Compra no quiero borrar también los Productos
    @ManyToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE }, fetch = FetchType.LAZY)
    @JoinTable(name = "COMPRA_PRODUCTO", joinColumns = { @JoinColumn(name = "COMPRA_ID") }, inverseJoinColumns = { @JoinColumn(name = "PRODUCTO_ID") })
    private List<Producto> productos = new ArrayList<Producto>();

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "CREATED")
    private Date created;

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

    public List<Producto> getProductos() {
        return productos;
    }

    public void setProductos(List<Producto> productos) {
        this.productos = productos;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }
}