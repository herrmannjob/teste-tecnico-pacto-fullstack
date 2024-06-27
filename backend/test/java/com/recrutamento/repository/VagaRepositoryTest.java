package com.example.recrutamento.repository;

import com.example.recrutamento.model.Vaga;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
public class VagaRepositoryTest {

    @Autowired
    private VagaRepository vagaRepository;

    @Test
    public void testFindAll() {
        Vaga vaga = new Vaga();
        vaga.setTitulo("Test Vaga");
        vagaRepository.save(vaga);

        List<Vaga> vagas = vagaRepository.findAll();
        assertFalse(vagas.isEmpty());
    }
}
