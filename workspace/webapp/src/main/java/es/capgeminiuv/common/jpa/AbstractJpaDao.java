package es.capgeminiuv.common.jpa;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 * Implementaci�n abstracta de la Interfaz JpaDao para el manejo de BOs en negocio
 *
 * @param <DomainObject> Tipolog�a del objeto implicado
 * @param <T> Identificador del objeto
 */
public abstract class AbstractJpaDao<DomainObject extends Serializable, T extends Serializable> implements JpaDao<DomainObject, T> {

	@PersistenceContext
	EntityManager entityManager;

	public EntityManager getEntityManager() {
		return entityManager;
	}

	protected Class<DomainObject> domainClass = getDomainClass();

	@SuppressWarnings("unchecked")
	protected Class<DomainObject> getDomainClass() {
		Object type = getClass().getGenericSuperclass();
		if (type instanceof ParameterizedType) {
			return (Class<DomainObject>) ((ParameterizedType) type).getActualTypeArguments()[0];
		} else {
			return (Class<DomainObject>) type.getClass();
		}
	}

	/**
	 * Carga de par�metros en la query mediante un hash
	 * 
	 * @param query Consulta a lanzar
	 * @param params Map de par�metros que setear en query
	 */
	protected void setParameters(Query query, Map<String, Object> params) {
		for (String key : params.keySet()) {
			query.setParameter(key, params.get(key));
		}
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public DomainObject get(T id) {
		return getEntityManager().find(domainClass, id);
	}

	/**
	 * {@inheritDoc}
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<DomainObject> findAll() {
		Query query = getEntityManager().createQuery("from " + domainClass.getName());
		return query.getResultList();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public void save(DomainObject entity) {
		getEntityManager().persist(entity);
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public DomainObject update(DomainObject entity) {
		DomainObject dom = getEntityManager().merge(entity);
		getEntityManager().flush();
		return dom;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public void delete(DomainObject entity) {
		getEntityManager().remove(entity);
		getEntityManager().flush();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public void deleteById(T id) {
		this.delete(this.get(id));
	}
}
