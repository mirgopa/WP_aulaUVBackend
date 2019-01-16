package es.capgeminiuv.service;

import java.util.List;

import es.capgeminiuv.dto.ProductoDto;
import es.capgeminiuv.model.Producto;

public interface ProductoService {

	/**
	 * Obtiene un listado de {@link ProductoDto} filtrados por un DTO de entrada
	 * 
	 * @param dto DTO encargado de filtrar el listado de {@link ProductoDto} resultante
	 * @return Listado de {@link ProductoDto} filtrados
	 */
	public abstract List<ProductoDto> find(ProductoDto dto);

	/**
	 * Obtiene un {@link ProductoDto} por identificador
	 * 
	 * @param id Identificador del {@link Producto} buscado
	 * @return {@link ProductoDto} buscado en base a un identificador
	 */
	public abstract ProductoDto get(Long id);

	/**
	 * Actualiza un {@link Producto} ya existente
	 * 
	 * @param dto DTO encargado de actualizar la entidad que se encuentra en Base de Datos
	 * @return Resultado (T/F) de la operación de actualización
	 */
	public abstract Boolean update(ProductoDto dto);

	/**
	 * Elimina un {@link Producto} ya existente en Base de Datos
	 * 
	 * @param id Identificador del {@link Producto} a eliminar
	 * @return Resultado (T/F) de la operación de Eliminación
	 */
	public abstract Boolean deleteById(Long id);
}
