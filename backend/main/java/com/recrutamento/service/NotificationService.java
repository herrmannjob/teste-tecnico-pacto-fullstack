package com.example.recrutamento.service;

import org.springframework.stereotype.Service;

@Service
public class NotificationService {

    public void notifyUser(String message) {
        System.out.println("Notificação enviada: " + message);
    }
}
