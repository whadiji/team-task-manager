import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
  @Input() teamId!: number; // Réception de l'ID de l'équipe depuis le composant parent
  tasks: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    if (this.teamId) {
      this.getTasks();
    }
  }

   // Récupérer les tâches de l'équipe sélectionnée
   getTasks(): void {
    this.taskService.getTasks(this.teamId).subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  // Créer une nouvelle tâche
  createTask(title: string, description: string): void {
    if (!this.teamId) {
      console.error('Veuillez sélectionner une équipe');
      return;
    }
    this.taskService.createTask(this.teamId, title, description).subscribe(() => {
      this.getTasks();
    });
  }
}
