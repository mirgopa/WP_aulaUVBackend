package es.capgeminiuv.dao;

import java.util.List;

import es.capgeminiuv.common.jpa.JpaDao;
import es.capgeminiuv.dto.CompraDto;
import es.capgeminiuv.model.Compra;

public interface CompraDao extends JpaDao<Compra, Long> {

    /**
     * Obtiene una lista de {@link Compra} filtrada desde vista
     * 
     * @param dto Objeto encargado de trasladar los filtros a la query
     * @return Listado de {@link Compra}
     */
    List<CompraDto> find(CompraDto dto);
}
