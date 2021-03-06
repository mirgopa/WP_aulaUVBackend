package es.capgeminiuv.common;

import java.util.Arrays;
import java.util.List;
import java.util.TimeZone;

import org.dozer.DozerBeanMapper;
import org.springframework.boot.autoconfigure.jackson.Jackson2ObjectMapperBuilderCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class Config {

    private static final String URL = "http://localhost:4200";

    @Bean(name = "main.dozer.mapper")
    public DozerBeanMapper dozerBean() {
        List<String> mappingFiles = Arrays.asList("dozer-mapping.xml");

        DozerBeanMapper dozerBean = new DozerBeanMapper();
        dozerBean.setMappingFiles(mappingFiles);
        return dozerBean;
    }

    @Bean
    public Jackson2ObjectMapperBuilderCustomizer jacksonObjectMapperCustomization() {
        return jacksonObjectMapperBuilder -> jacksonObjectMapperBuilder.timeZone(TimeZone.getDefault());
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {

            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/producto/**").allowedOrigins(URL).allowedMethods("GET", "POST", "PUT", "DELETE").allowCredentials(false).maxAge(3600);
                registry.addMapping("/compra/**").allowedOrigins(URL).allowedMethods("GET", "POST", "PUT", "DELETE").allowCredentials(false).maxAge(3600);
            }
        };
    }
}