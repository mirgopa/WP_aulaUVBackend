package es.capgeminiuv.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import es.capgeminiuv.common.mapping.BeanUtils;
import es.capgeminiuv.dao.CompraDao;
import es.capgeminiuv.dao.ProductoDao;
import es.capgeminiuv.dto.CompraDto;
import es.capgeminiuv.dto.ProductoDto;
import es.capgeminiuv.model.Compra;
import es.capgeminiuv.model.Producto;

@Service("compraService")
@Transactional(readOnly = true)
public class CompraServiceImpl implements CompraService {

    @Autowired
    private CompraDao compraDao;

    @Autowired
    private ProductoDao productoDao;

    public CompraDao getCompraDao() {
        return compraDao;
    }
    
    public ProductoDao getProductoDao() {
        return productoDao;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<CompraDto> find(CompraDto dto) {
        return getCompraDao().find(dto);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public CompraDto get(Long id) {
        if (id != null) {
            Compra compra = getCompraDao().get(id);
            if (compra != null) {
                return BeanUtils.copyProperties(compra, CompraDto.class);
            }
        }
        return null;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    @Transactional(readOnly = false)
    public Boolean update(CompraDto dto) {
        Compra compraNew = null;
        if (dto.getId() != null) {
            compraNew = getCompraDao().get(dto.getId());
        }

        if (compraNew == null) {
            compraNew = new Compra();
        }

        compraNew.setNombre(dto.getNombre());
        compraNew.setCreated(new Date());

        if (dto.getProductos() != null && !dto.getProductos().isEmpty()) {
            List<Producto> productos = new ArrayList<Producto>();
            for (ProductoDto productoDto : dto.getProductos()) {
                Producto producto = getProductoDao().get(productoDto.getId());
                if (producto != null) {
                    productos.add(producto);
                }
            }
            compraNew.setProductos(productos);
        }

        Compra compraUpdated = getCompraDao().update(compraNew);

        if (compraUpdated != null) {
            return true;
        }
        return false;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    @Transactional(readOnly = false)
    public Boolean deleteById(Long id) {
        if (this.get(id) != null) {
            getCompraDao().deleteById(id);
            return true;
        }
        return false;
    }
}