package com.example.recrutamento.service;

import com.example.recrutamento.model.Candidatura;
import com.example.recrutamento.repository.CandidaturaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidaturaService {

    @Autowired
    private CandidaturaRepository candidaturaRepository;

    public List<Candidatura> findAll() {
        return candidaturaRepository.findAll();
    }

    public Candidatura save(Candidatura candidatura) {
        return candidaturaRepository.save(candidatura);
    }

    public void deleteById(Long id) {
        candidaturaRepository.deleteById(id);
    }
}
