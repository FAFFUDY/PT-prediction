import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
  periodForm: FormGroup;
  periods: any[] = [];
  selectedDate: Date | null = null;
  
  constructor(private fb: FormBuilder, private datePipe: DatePipe) {
    this.periodForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.periodForm.valid) {
      const period = {
        startDate: this.datePipe.transform(this.periodForm.value.startDate, 'yyyy-MM-dd'),
        endDate: this.datePipe.transform(this.periodForm.value.endDate, 'yyyy-MM-dd')
      };
      this.periods.push(period);
      this.periodForm.reset();
    }
  }

  onDateSelect(date: Date): void {
    this.selectedDate = date;
  }
}