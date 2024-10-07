import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { DashboardNames } from '../models/reveal-webinar/dashboard-names';
import { ErrorHandlerService } from './error-handler.service';

const API_ENDPOINT = 'https://localhost:7219';

@Injectable({
  providedIn: 'root'
})
export class RevealWebinarService {
  constructor(
    private http: HttpClient
  ) { }

  public getDashboardNamesList(): Observable<DashboardNames[]> {
    return this.http.get<DashboardNames[]>(`${API_ENDPOINT}/dashboards/names`)
      .pipe(catchError(ErrorHandlerService.handleError<DashboardNames[]>('getDashboardNamesList', [])));
  }
}
