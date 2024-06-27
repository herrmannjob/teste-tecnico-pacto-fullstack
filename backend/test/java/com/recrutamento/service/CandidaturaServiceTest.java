package com.example.recrutamento.service;

import com.example.recrutamento.model.Candidatura;
import com.example.recrutamento.repository.CandidaturaRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class CandidaturaServiceTest {

    @Mock
    private CandidaturaRepository candidaturaRepository;

    @InjectMocks
    private CandidaturaService candidaturaService;

    @Test
    public void testFindAll() {
        Candidatura candidatura = new Candidatura();
        when(candidaturaRepository.findAll()).thenReturn(Arrays.asList(candidatura));

        List<Candidatura> candidaturas = candidaturaService.findAll();
        assertFalse(candidaturas.isEmpty());
    }

    @Test
    public void testSaveCandidatura() {
        Candidatura candidatura = new Candidatura();
        when(candidaturaRepository.save(any(Candidatura.class))).thenReturn(candidatura);

        Candidatura savedCandidatura = candidaturaService.save(candidatura);
        assertNotNull(savedCandidatura);
    }

    @Test
    public void testDeleteById() {
        doNothing().when(candidaturaRepository).deleteById(anyLong());

        candidaturaService.deleteById(1L);
        verify(candidaturaRepository, times(1)).deleteById(1L);
    }
}
