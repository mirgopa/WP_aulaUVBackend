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

import es.capgeminiuv.dto.CompraDto;
import es.capgeminiuv.service.CompraService;

@Controller
@RequestMapping("compra")
public class CompraController {

    @Autowired
    private CompraService compraService;

    public CompraService getCompraService() {
        return compraService;
    }

    @ResponseBody
    @GetMapping(value = "findCompra")
    public List<CompraDto> findCompra(@RequestParam(value = "nombre", required = false) String nombre) {
        try {
            return getCompraService().find(new CompraDto(nombre));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @ResponseBody
    @GetMapping(value = "getCompra")
    public CompraDto getCompra(@RequestParam(value = "id", required = true) Long id) {
        try {
            return getCompraService().get(id);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @ResponseBody
    @PutMapping(value = "updateCompra")
    public Boolean updateCompra(@RequestBody CompraDto compraDto) {
        try {
            return getCompraService().update(compraDto);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    @ResponseBody
    @DeleteMapping(value = "deleteCompra")
    public Boolean deleteCompra(@RequestParam(value = "id", required = true) Long id) {
        try {
            return getCompraService().deleteById(id);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }
}