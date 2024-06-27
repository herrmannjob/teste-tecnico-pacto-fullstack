package com.example.recrutamento.controller;

import com.example.recrutamento.model.Vaga;
import com.example.recrutamento.service.VagaService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(VagaController.class)
public class VagaControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private VagaService vagaService;

    @Test
    public void testGetAllVagas() throws Exception {
        Vaga vaga = new Vaga();
        vaga.setId(1L);
        vaga.setTitulo("Test Vaga");

        when(vagaService.findAll()).thenReturn(Arrays.asList(vaga));

        mockMvc.perform(get("/api/vagas"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].titulo").value("Test Vaga"));
    }

    @Test
    public void testCreateVaga() throws Exception {
        Vaga vaga = new Vaga();
        vaga.setTitulo("Nova Vaga");

        when(vagaService.save(any(Vaga.class))).thenReturn(vaga);

        mockMvc.perform(post("/api/vagas")
                .contentType("application/json")
                .content("{\"titulo\":\"Nova Vaga\",\"descricao\":\"Descrição\",\"requisitos\":\"Requisitos\"}"))
                .andExpect(status().isOk());
    }

    @Test
    public void testUpdateVaga() throws Exception {
        Vaga vaga = new Vaga();
        vaga.setId(1L);
        vaga.setTitulo("Vaga Atualizada");

        when(vagaService.save(any(Vaga.class))).thenReturn(vaga);

        mockMvc.perform(put("/api/vagas/1")
                .contentType("application/json")
                .content("{\"titulo\":\"Vaga Atualizada\",\"descricao\":\"Descrição Atualizada\",\"requisitos\":\"Requisitos Atualizados\"}"))
                .andExpect(status().isOk());
    }

    @Test
    public void testDeleteVaga() throws Exception {
        doNothing().when(vagaService).deleteById(anyLong());

        mockMvc.perform(delete("/api/vagas/1"))
                .andExpect(status().isOk());
    }
}
