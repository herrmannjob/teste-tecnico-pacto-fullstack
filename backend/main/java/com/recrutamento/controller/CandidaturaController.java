package com.example.recrutamento.controller;

import com.example.recrutamento.model.Candidatura;
import com.example.recrutamento.service.CandidaturaService;
import com.example.recrutamento.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/candidaturas")
public class CandidaturaController {

    @Autowired
    private CandidaturaService candidaturaService;

    @Autowired
    private NotificationService notificationService;

    @GetMapping
    public List<Candidatura> getAllCandidaturas() {
        return candidaturaService.findAll();
    }

    @PostMapping
    public Candidatura createCandidatura(@RequestBody Candidatura candidatura) {
        Candidatura savedCandidatura = candidaturaService.save(candidatura);
        notificationService.notifyUser("Nova candidatura enviada para a vaga " + candidatura.getVaga().getTitulo());
        return savedCandidatura;
    }

    @DeleteMapping("/{id}")
    public void deleteCandidatura(@PathVariable Long id) {
        candidaturaService.deleteById(id);
    }
}
