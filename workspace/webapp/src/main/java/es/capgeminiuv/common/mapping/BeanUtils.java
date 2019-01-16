package es.capgeminiuv.common.mapping;

import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import javax.annotation.Resource;

import org.apache.commons.collections.CollectionUtils;
import org.dozer.DozerBeanMapper;
import org.dozer.loader.api.BeanMappingBuilder;
import org.dozer.loader.api.TypeMappingBuilder;
import org.dozer.loader.api.TypeMappingOptions;
import org.springframework.beans.BeansException;
import org.springframework.stereotype.Component;

@Component
public class BeanUtils extends org.springframework.beans.BeanUtils {

    private static DozerBeanMapper mapper;
    private static Map<String, DozerBeanMapper> cache = new ConcurrentHashMap<String, DozerBeanMapper>();

    @SuppressWarnings("static-access")
    @Resource(name = "main.dozer.mapper")
    public void setMapper(DozerBeanMapper mapper) {
        this.mapper = mapper;
    }

    @SuppressWarnings("unused")
    private static DozerBeanMapper getMapper(final Class<?> sourceClass, final Class<?> targetClass, final String[] ignoreProperties, final String key) {
        DozerBeanMapper localMapper = cache.get(key);
        if (localMapper == null) {
            BeanMappingBuilder builder = new BeanMappingBuilder() {

                @Override
                protected void configure() {
                    TypeMappingBuilder builder = mapping(sourceClass, targetClass, TypeMappingOptions.mapId(key), TypeMappingOptions.mapNull(true),
                            TypeMappingOptions.mapEmptyString(true));
                    for (String field : ignoreProperties) {
                        builder.exclude(field);
                    }
                }
            };

            localMapper = new DozerBeanMapper(mapper.getMappingFiles());
            localMapper.addMapping(builder);
            cache.put(key, localMapper);
        }
        return localMapper;
    }

    public static <T> T copyProperties(Object source, Class<T> clazz) throws BeansException {
        return mapper.map(source, clazz);
    }

    @SuppressWarnings({ "unchecked", "rawtypes" })
    public static <T> Collection<T> collect(Collection source, Class<T> clazz) throws BeansException {
        return CollectionUtils.collect(source, new DTOTransformer(clazz));
    }
}
