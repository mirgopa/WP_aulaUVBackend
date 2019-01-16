package es.capgeminiuv.common;

import java.util.Arrays;
import java.util.List;
import java.util.TimeZone;

import org.dozer.DozerBeanMapper;
import org.springframework.boot.autoconfigure.jackson.Jackson2ObjectMapperBuilderCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Config {

    @Bean(name = "main.dozer.mapper")
    public DozerBeanMapper dozerBean() {
        List<String> mappingFiles = Arrays.asList("dozer-mapping.xml");

        DozerBeanMapper dozerBean = new DozerBeanMapper();
        dozerBean.setMappingFiles(mappingFiles);
        return dozerBean;
    }

    @Bean
    public Jackson2ObjectMapperBuilderCustomizer jacksonObjectMapperCustomization() {
        return jacksonObjectMapperBuilder -> 
            jacksonObjectMapperBuilder.timeZone(TimeZone.getDefault());
    }
}