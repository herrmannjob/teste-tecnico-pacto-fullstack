package com.example.recrutamento.service;

import com.example.recrutamento.model.Vaga;
import com.example.recrutamento.repository.VagaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VagaService {

    @Autowired
    private VagaRepository vagaRepository;

    public List<Vaga> findAll() {
        return vagaRepository.findAll();
    }

    public Vaga save(Vaga vaga) {
        return vagaRepository.save(vaga);
    }

    public void deleteById(Long id) {
        vagaRepository.deleteById(id);
    }
}
