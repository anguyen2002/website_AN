import { Injectable } from '@angular/core';
import { Project } from './project';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      title: 'UCAR Nitrogen Cycle Game',
      description: 'Engineered a multi-lingual web-based educational simulation in collaboration with the University Corporation for Atmospheric Research (UCAR) to model the nitrogen cycle. Implemented component-based architecture, reactive state management, and dynamic UI updates to create an interactive learning experience.',
      imgURL: 'assets/ncg.png',
      link: 'https://scied.ucar.edu/interactive/nitrogen-cycle-game',
      techStack: 'Angular, ngx-translate, TypeScript, CSS'
    },
    {
      title: 'Lets Eat',
      description: 'Developed a full-stack mobile application with a focus on real-time data handling and geolocation services, enabling students to discover nearby restaurants and coordinate shared dining experiences. Implemented RESTful APIs, state management, and responsive UI design for seamless user interactions.',
      imgURL: 'assets/letsEat.png',
      techStack: 'React, JavaScript, Figma, RESTful APIs'
    },
    {
      title: 'Song Wordle',
      description: 'Designed and implemented a music-based web game using Angular, leveraging modular components, TypeScript-driven game logic, and SCSS-based styling. Integrated audio processing and interactive gameplay mechanics to provide an engaging user experience inspired by the Wordle framework.',
      imgURL: 'assets/song.png', 
      techStack: 'Angular, TypeScript, SCSS'
    }
  ]

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }
}
