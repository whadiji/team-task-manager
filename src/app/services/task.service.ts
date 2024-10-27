import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/teams';

  constructor(private http: HttpClient) {}

  getTasks(teamId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${teamId}/tasks`);
  }

  createTask(teamId: number, title: string, description: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${teamId}/tasks`, { title, description });
  }
}
