package com.example.recrutamento.controller;

import com.example.recrutamento.model.User;
import com.example.recrutamento.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(AuthController.class)
public class AuthControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AuthenticationManager authenticationManager;

    @MockBean
    private UserService userService;

    @Test
    public void testAuthenticateUser() throws Exception {
        User user = new User();
        user.setUsername("testuser");
        user.setPassword("password");

        mockMvc.perform(post("/api/auth/login")
                .contentType("application/json")
                .content("{\"username\":\"testuser\",\"password\":\"password\"}"))
                .andExpect(status().isOk());
    }

    @Test
    public void testRegisterUser() throws Exception {
        User user = new User();
        user.setUsername("newuser");
        user.setPassword("newpassword");

        when(userService.save(any(User.class))).thenReturn(user);

        mockMvc.perform(post("/api/auth/register")
                .contentType("application/json")
                .content("{\"username\":\"newuser\",\"password\":\"newpassword\"}"))
                .andExpect(status().isOk());
    }
}
