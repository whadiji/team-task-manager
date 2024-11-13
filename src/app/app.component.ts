import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'team-task-manager';
  selectedTeamId: number | null = null; // Ajoutez cette propriét
    // Ajoutez cette méthode pour mettre à jour l'ID du team sélectionné
    onTeamSelected(teamId: number): void {
      this.selectedTeamId = teamId;
    }
}
