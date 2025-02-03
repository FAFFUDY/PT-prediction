package com.example.app.entity;

import java.time.LocalDate;

import lombok.Data;


@Data
public class PeriodPredictionRequestEntity {
    private LocalDate lastPeriodDate;
    private int cycleLength;
}