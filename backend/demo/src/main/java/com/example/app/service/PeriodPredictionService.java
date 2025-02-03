package com.example.app.service;

import java.time.LocalDate;

import org.springframework.stereotype.Service;

@Service
public class PeriodPredictionService {
    public LocalDate predictNextPeriod(LocalDate lastPeriodDate, int cycleLength) {
        return lastPeriodDate.plusDays(cycleLength);
    }
}
