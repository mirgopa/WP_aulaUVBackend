package es.capgeminiuv.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.Query;

import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

import es.capgeminiuv.common.jpa.AbstractJpaDao;
import es.capgeminiuv.dto.ProductoDto;
import es.capgeminiuv.model.Producto;

@Repository("productoDao")
public class ProductoDaoImpl extends AbstractJpaDao<Producto, Long> implements ProductoDao {

	/**
	 * {@inheritDoc}
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<ProductoDto> find(ProductoDto dto) {
		StringBuilder hql = new StringBuilder();
		StringBuilder where = new StringBuilder("");
		Map<String, Object> params = new HashMap<String, Object>();

		hql.append(" select new es.capgeminiuv.dto.ProductoDto(p.id, p.nombre, p.descripcion, p.image, p.readMore, p.precio) ");
		hql.append(" from Producto p ");

		// Filtrado de Parámetros
		if (StringUtils.hasText(dto.getNombre())) {
			where.append(StringUtils.hasText(where.toString()) ? " and " : " where ");
			where.append(" upper(p.nombre) like upper(:nombre) ");
			params.put("nombre", "%" + dto.getNombre() + "%");
		}

		Query query = getEntityManager().createQuery(hql.toString() + where.toString());
		setParameters(query, params);

		return query.getResultList();
	}

	@Override
	public Boolean isInUse(Long id) {
		if (id != null) {
			StringBuilder hql = new StringBuilder();
			StringBuilder where = new StringBuilder("");
			Map<String, Object> params = new HashMap<String, Object>();

			hql.append(" select count(c) from Compra c inner join c.productos cp ");
			where.append(" where cp.id = :productoId ");
			params.put("productoId", id);

			Query query = getEntityManager().createQuery(hql.toString() + where.toString());
			setParameters(query, params);

			if ((Long) query.getSingleResult() > 0)
				return true;
			else
				return false;
		}
		return true;
	}
}