package com.example.recrutamento.service;

import com.example.recrutamento.model.Vaga;
import com.example.recrutamento.repository.VagaRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class VagaServiceTest {

    @Mock
    private VagaRepository vagaRepository;

    @InjectMocks
    private VagaService vagaService;

    @Test
    public void testFindAll() {
        Vaga vaga = new Vaga();
        when(vagaRepository.findAll()).thenReturn(Arrays.asList(vaga));

        List<Vaga> vagas = vagaService.findAll();
        assertFalse(vagas.isEmpty());
    }

    @Test
    public void testSaveVaga() {
        Vaga vaga = new Vaga();
        when(vagaRepository.save(any(Vaga.class))).thenReturn(vaga);

        Vaga savedVaga = vagaService.save(vaga);
        assertNotNull(savedVaga);
    }

    @Test
    public void testDeleteById() {
        doNothing().when(vagaRepository).deleteById(anyLong());

        vagaService.deleteById(1L);
        verify(vagaRepository, times(1)).deleteById(1L);
    }
}
