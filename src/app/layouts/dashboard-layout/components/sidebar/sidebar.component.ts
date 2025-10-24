import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menuItems = [
    { 
      icon: 'fas fa-home',
      label: 'Inicio',
      route: '/dashboard/home'
    },
    {
      icon: 'fas fa-graduation-cap',
      label: 'Calificaciones',
      route: '/dashboard/grades'
    }
    // Agregar más elementos del menú según necesites
  ];
}