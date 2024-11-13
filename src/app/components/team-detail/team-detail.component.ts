import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../../services/team.service';
@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  teamId: number = 0;
  team: any = {};  // Pour stocker les détails de l'équipe
  tasks: any[] = [];  // Pour stocker les tâches associées à l'équipe

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID de l'équipe à partir de l'URL
    this.teamId = Number(this.route.snapshot.paramMap.get('id'));

    // Récupérer les détails de l'équipe avec ses tâches
    this.getTeamDetails();
  }

  getTeamDetails(): void {
    this.teamService.getTeamById(this.teamId).subscribe(
      (response) => {
        this.team = response; // Stocker les informations de l'équipe
        this.tasks = response.tasks; // Stocker les tâches de l'équipe
      },
      (error) => {
        console.error('Error fetching team details:', error);
      }
    );
  }
  
}