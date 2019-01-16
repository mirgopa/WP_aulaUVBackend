package es.capgeminiuv.dao;

import java.util.List;

import es.capgeminiuv.common.jpa.JpaDao;
import es.capgeminiuv.dto.ProductoDto;
import es.capgeminiuv.model.Producto;

public interface ProductoDao extends JpaDao<Producto, Long> {

	/**
	 * Obtiene una lista de {@link Producto} filtrada desde vista
	 * 
	 * @param dto Objeto encargado de trasladar los filtros a la query
	 * @return Listado de {@link Producto}
	 */
	List<ProductoDto> find(ProductoDto dto);

	/**
	 * Detecta si un {@link Producto} está en uso por parte de una {@link Compra}
	 * 
	 * @param id Identificador de {@link Producto}
	 * @return Indicador de si el {@link Producto} a eliminar está en uso
	 */
	Boolean isInUse(Long id);
}