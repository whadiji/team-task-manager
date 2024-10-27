import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiUrl = 'http://127.0.0.1:5000/teams';  // Adjust as necessary

  constructor(private http: HttpClient) {}

  // Fetch teams
  getTeams(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Create a new team
  createTeam(name: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { name });
  }
}
