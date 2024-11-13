import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
})
export class TeamListComponent implements OnInit {
  teams: any[] = [];
  selectedTeamId: number | null = null;
  teamDetails: any = null;  
  newTeamName: string = ''; // Nouveau champ pour stocker le nom de l'équipe


  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.loadTeams();  // Load teams on initialization
  }

  loadTeams() {
    this.teamService.getTeams().subscribe(data => {
      this.teams = data;
      console.log('Fetched teams:', this.teams);  // Log fetched teams
    },
    error => {
      console.error('Error fetching teams:', error);  // Log any errors
    }
  );
  }

  createTeam(name: string) {
    this.teamService.createTeam(name).subscribe(() => {
      this.loadTeams(); // Refresh the team list
    });
  }
  // Méthode appelée lors du clic sur un team
  onTeamClick(teamId: number): void {
    this.selectedTeamId = teamId;
    this.getTeamDetails(teamId);  // Récupérer les détails de l'équipe lorsqu'on clique
  }

  // Méthode pour récupérer les détails de l'équipe sélectionnée
  getTeamDetails(teamId: number): void {
    this.teamService.getTeamById(teamId).subscribe((team) => {
      this.teamDetails = team;  // Stocke les détails de l'équipe
    });
  }
  addTeam(): void {
    if (this.newTeamName.trim() !== '') {
      this.teamService.createTeam(this.newTeamName).subscribe({
        next: (team) => {
          this.teams.push(team); // Ajouter l'équipe à la liste locale
          this.newTeamName = ''; // Réinitialiser le champ de texte
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout de l\'équipe:', err);
        },
      });
    } else {
      alert('Le nom de l\'équipe ne peut pas être vide');
    }
  }
}
