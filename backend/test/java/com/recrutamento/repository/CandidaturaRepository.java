package com.example.recrutamento.repository;

import com.example.recrutamento.model.Candidatura;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
public class CandidaturaRepositoryTest {

    @Autowired
    private CandidaturaRepository candidaturaRepository;

    @Test
    public void testFindAll() {
        Candidatura candidatura = new Candidatura();
        candidaturaRepository.save(candidatura);

        List<Candidatura> candidaturas = candidaturaRepository.findAll();
        assertFalse(candidaturas.isEmpty());
    }
}
