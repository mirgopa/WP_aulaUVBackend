package es.capgeminiuv.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import es.capgeminiuv.dto.ProductoDto;
import es.capgeminiuv.service.ProductoService;

@Controller
@RequestMapping("producto")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    public ProductoService getProductoService() {
        return productoService;
    }

    @ResponseBody
    @GetMapping(value = "findProducto")
    public List<ProductoDto> findProducto(@RequestParam(value = "nombre", required = false) String nombre) {
        try {
            return productoService.find(new ProductoDto(nombre));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @ResponseBody
    @GetMapping(value = "getProducto")
    public ProductoDto getProducto(@RequestParam(value = "id", required = true) Long id) {
        try {
            return productoService.get(id);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @ResponseBody
    @PutMapping(value = "updateProducto")
    public Boolean updateProducto(@RequestBody ProductoDto productoDto) {
        try {
            return productoService.update(productoDto);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    @ResponseBody
    @DeleteMapping(value = "deleteProducto")
    public Boolean deleteProducto(@RequestParam(value = "id", required = true) Long id) {
        try {
            return productoService.deleteById(id);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }
}