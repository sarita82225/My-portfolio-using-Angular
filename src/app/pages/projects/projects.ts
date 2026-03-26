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
      title: ' Saaj E-commerce App',
      image: 'https://via.placeholder.com/300',
      description: 'This is small Ecommerce project with all functionalities and payment using react19, tailwind, node js and mongoDB(MERN)',
      github:'https://github.com/sarita82225/SAAJ-Ecommerce-project-using-react19'
      
    },
    {
      title: 'Mini-patient-dashboard',
      image: 'https://via.placeholder.com/300',
      description: 'This is a small web application where a dentist can view a list of patients and click on a patient to see their treatment history.',
        github:'https://github.com/sarita82225/Mini-Patient-Dashboard'
      
    },
    {
      title: 'my-Portfolio Website',
      image: 'https://via.placeholder.com/300',
      description: 'Personal portfolio website including complete details about myself',
        github:'https://github.com/sarita82225/My-portfolio-using-Angular'
      
    },
    {
      title: 'ResAna360',
      image: 'https://via.placeholder.com/300',
      description: 'This is resume analyzer project where user can upload their resume and get the analysis of their resume and also get the suggestion to improve.',
        github:'https://github.com/sarita82225/ResAna360'
      
    },
{
      title: 'Food-delivery-app',
      image: 'https://via.placeholder.com/300',
      description: 'This is a food delivery app where user can order food online and get delivery at their doorsteps',
        github:'https://github.com/sarita82225/Saaj-food-delivery'

    },

  ];
}
