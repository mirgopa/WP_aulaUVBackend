package es.capgeminiuv.common.jpa;

import java.io.Serializable;
import java.util.List;

/**
 * Interfaz parametrizable para la implementaci�n de m�todos de un DAO.
 * 
 * @param <DomainObject> Tipolog�a del objeto implicado
 * @param <T> Identificador del objeto
 */
public interface JpaDao<DomainObject extends Serializable, T extends Serializable> {

	/**
	 * Obtiene una entidad por identificador
	 * 
	 * @param id Identificador de la entidad a buscar
	 * @return Entidad buscada
	 */
	public DomainObject get(T id);

	/**
	 * Obtiene el listado completo de entidades
	 * 
	 * @return Listado de entidades
	 */
	public List<DomainObject> findAll();

	/**
	 * Almacena una nueva entidad en la base de datos
	 * 
	 * @param entity Entidad a dar de alta
	 */
	public void save(DomainObject entity);

	/**
	 * Actualiza la informaci�n de una entidad existente en base de datos
	 * 
	 * @param entity Entidad a actualizar
	 * @return Entidad actualizada
	 */
	public DomainObject update(DomainObject entity);

	/**
	 * Borrado de una entidad a partir del objeto a eliminar
	 * 
	 * @param entity Entidad a eliminar
	 */
	public void delete(DomainObject entity);

	/**
	 * Borrado de una entidad a partir del identificador de la misma
	 * 
	 * @param id Identificador de la entidad a eliminar
	 */
	public void deleteById(T id);
}