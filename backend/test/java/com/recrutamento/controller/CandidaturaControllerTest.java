package com.example.recrutamento.controller;

import com.example.recrutamento.model.Candidatura;
import com.example.recrutamento.service.CandidaturaService;
import com.example.recrutamento.service.NotificationService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(CandidaturaController.class)
public class CandidaturaControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CandidaturaService candidaturaService;

    @MockBean
    private NotificationService notificationService;

    @Test
    public void testGetAllCandidaturas() throws Exception {
        Candidatura candidatura = new Candidatura();
        candidatura.setId(1L);

        when(candidaturaService.findAll()).thenReturn(Arrays.asList(candidatura));

        mockMvc.perform(get("/api/candidaturas"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id").value(1L));
    }

    @Test
    public void testCreateCandidatura() throws Exception {
        Candidatura candidatura = new Candidatura();
        candidatura.setId(1L);

        when(candidaturaService.save(any(Candidatura.class))).thenReturn(candidatura);

        mockMvc.perform(post("/api/candidaturas")
                .contentType("application/json")
                .content("{\"vaga\":{\"id\":1},\"user\":{\"id\":1}}"))
                .andExpect(status().isOk());
    }

    @Test
    public void testDeleteCandidatura() throws Exception {
        doNothing().when(candidaturaService).deleteById(anyLong());

        mockMvc.perform(delete("/api/candidaturas/1"))
                .andExpect(status().isOk());
    }
}
