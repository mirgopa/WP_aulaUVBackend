package es.capgeminiuv.service;

import java.util.List;

import es.capgeminiuv.dto.CompraDto;
import es.capgeminiuv.model.Compra;

public interface CompraService {

    /**
     * Obtiene un listado de {@link CompraDto} filtrados por un DTO de entrada
     * 
     * @param dto DTO encargado de filtrar el listado de {@link CompraDto} resultante
     * @return Listado de {@link CompraDto} filtrados
     */
    public abstract List<CompraDto> find(CompraDto dto);

    /**
     * Obtiene un {@link CompraDto} por identificador
     * 
     * @param id Identificador del {@link Compra} buscado
     * @return {@link CompraDto} buscado en base a un identificador
     */
    public abstract CompraDto get(Long id);

    /**
     * Actualiza un {@link Compra} ya existente
     * 
     * @param dto DTO encargado de actualizar la entidad que se encuentra en Base de Datos
     * @return Resultado (T/F) de la operación de actualización
     */
    public abstract Boolean update(CompraDto dto);

    /**
     * Elimina un {@link Compra} ya existente en Base de Datos
     * 
     * @param id Identificador del {@link Compra} a eliminar
     * @return Resultado (T/F) de la operación de actualización
     */
    public abstract Boolean deleteById(Long id);
}
