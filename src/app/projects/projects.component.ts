import { Component, OnInit } from '@angular/core';
import { Project } from './project';
import { ProjectService } from './project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{
  projects: Project[] = [];

  constructor(private projectService:ProjectService, private router:Router){}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => this.projects = data);
  }

  goHome() {
    this.router.navigate(['/']);
  }

}
