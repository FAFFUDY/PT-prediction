import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { PredictionService } from '../app.service';

@Component({
  selector: 'app-period-tracker',
  templateUrl: './period-tracker.component.html',
  styleUrls: ['./period-tracker.component.scss'],
  providers: [DatePipe],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(500)),
    ])
  ]
})
export class PeriodTrackerComponent implements OnInit {
  ngOnInit(): void {}
  
  lastPeriodDate: string = '';
  cycleLength: number = 28;
  predictedDate: string | null = null;

  constructor(private predictionService: PredictionService) {}

  predict() {
    this.predictionService.predictNextPeriod(this.lastPeriodDate, this.cycleLength).subscribe(
      (response: any) => {
        this.predictedDate = response;
      },
      (error) => {
        console.error('Error predicting next period:', error);
      }
    );
  }
}