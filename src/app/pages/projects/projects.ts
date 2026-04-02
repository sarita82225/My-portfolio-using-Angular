import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: ' Login-app-using-Angular',
      image: "",
      description: 'A secure and responsive login application built with Angular that allows users to authenticate and access protected areas of the application.',
      github:'https://github.com/sarita82225/Login-app-using-Angular'
      
    },
    {
      title: 'Mini-patient-dashboard',
      image: '',
      description: 'This is a small web application where a dentist can view a list of patients and click on a patient to see their treatment history.',
        github:'https://github.com/sarita82225/Mini-Patient-Dashboard'
      
    },
    {
      title: 'my-Portfolio Website',
      image: '',
      description: 'Personal portfolio website including complete details about myself',
        github:'https://github.com/sarita82225/My-portfolio-using-Angular'
      
    },
    {
      title: 'Blog using Angular',
      image: '',
      description: 'A responsive blog application built with Angular that allows users to create, view, and manage blog posts with a clean and user-friendly interface..',
        github:'https://github.com/sarita82225/Blog-using-Angular'
      
    },
{
      title: 'ToDo-App-using-react',
      image: '',
      description: 'A responsive and user-friendly Todo application built with React that allows users to efficiently manage daily tasks by adding, editing, completing, and deleting todos.',
        github:'https://github.com/sarita82225/ToDo-App-using-react'

    },

  ];
}
