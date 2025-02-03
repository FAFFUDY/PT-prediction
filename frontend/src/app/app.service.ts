import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  private apiUrl = 'http://localhost:8080/period/predict';

  constructor(private http: HttpClient) {}

  predictNextPeriod(lastPeriodDate: string, cycleLength: number): Observable<any> {
    const request = { lastPeriodDate, cycleLength };
    return this.http.post(this.apiUrl, request);
  }
}