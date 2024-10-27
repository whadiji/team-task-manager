import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
})
export class TeamListComponent implements OnInit {
  teams: any[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.getTeams().subscribe(data => {
      this.teams = data;
    });
  }

  createTeam(name: string) {
    this.teamService.createTeam(name).subscribe(() => {
      this.ngOnInit(); // Refresh the team list
    });
  }
}

