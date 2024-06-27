package com.example.recrutamento.controller;

import com.example.recrutamento.model.Vaga;
import com.example.recrutamento.service.VagaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vagas")
public class VagaController {

    @Autowired
    private VagaService vagaService;

    @GetMapping
    public List<Vaga> getAllVagas() {
        return vagaService.findAll();
    }

    @PostMapping
    public Vaga createVaga(@RequestBody Vaga vaga) {
        return vagaService.save(vaga);
    }

    @PutMapping("/{id}")
    public Vaga updateVaga(@PathVariable Long id, @RequestBody Vaga vaga) {
        vaga.setId(id);
        return vagaService.save(vaga);
    }

    @DeleteMapping("/{id}")
    public void deleteVaga(@PathVariable Long id) {
        vagaService.deleteById(id);
    }
}
