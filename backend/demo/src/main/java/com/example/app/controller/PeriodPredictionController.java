package com.example.app.controller;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.app.entity.PeriodPredictionRequestEntity;
import com.example.app.service.PeriodPredictionService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/period")
public class PeriodPredictionController {
    @Autowired
    private PeriodPredictionService predictionService;

    @PostMapping("/predict")
    public ResponseEntity<LocalDate> predictNextPeriod(@RequestBody PeriodPredictionRequestEntity request) {
        LocalDate nextPeriodDate = predictionService.predictNextPeriod(request.getLastPeriodDate(), request.getCycleLength());
        return ResponseEntity.ok(nextPeriodDate);
    }
}