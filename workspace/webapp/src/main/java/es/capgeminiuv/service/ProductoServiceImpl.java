package es.capgeminiuv.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import es.capgeminiuv.common.mapping.BeanUtils;
import es.capgeminiuv.dao.ProductoDao;
import es.capgeminiuv.dto.ProductoDto;
import es.capgeminiuv.model.Producto;

@Service("productoService")
@Transactional(readOnly = true)
public class ProductoServiceImpl implements ProductoService {

    @Autowired
    private ProductoDao productoDao;

    public ProductoDao getProductoDao() {
        return productoDao;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<ProductoDto> find(ProductoDto dto) {
        return getProductoDao().find(dto);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public ProductoDto get(Long id) {
        if (id != null) {
            Producto productoGet = getProductoDao().get(id);
            if (productoGet != null) {
                return BeanUtils.copyProperties(productoGet, ProductoDto.class);
            }
        }
        return null;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    @Transactional(readOnly = false)
    public Boolean update(ProductoDto dto) {
        Producto productoNew = null;
        if (dto.getId() != null) {
            productoNew = productoDao.get(dto.getId());
        }
        if (productoNew == null) {
            productoNew = new Producto();
        }

        productoNew.setNombre(dto.getNombre());
        productoNew.setDescripcion(dto.getDescripcion());
        productoNew.setImage(dto.getImage());
        productoNew.setReadMore(dto.getReadMore());
        productoNew.setPrecio(dto.getPrecio());

        Producto productoUpdated = productoDao.update(productoNew);

        if (productoUpdated != null) {
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
        if (id != null && !getProductoDao().isInUse(id)) {
            productoDao.deleteById(id);
            return true;
        }
        return false;
    }
}