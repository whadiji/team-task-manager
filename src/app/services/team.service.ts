import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiUrl = 'http://localhost:5000/teams';

  constructor(private http: HttpClient) {}

  getTeams(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createTeam(name: string): Observable<any> {
    return this.http.post(this.apiUrl, { name });
  }
}
