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
      icon: 'fas fa-users',
      label: 'Gestión de grupo',
      route: '/dashboard/groups'
    },
    {
      icon: 'fas fa-upload',
      label: 'Subir calificaciones',
      route: '/dashboard/upload-grades'
    },
    {
      icon: 'fas fa-edit',
      label: 'Registrar calificaciones',
      route: '/dashboard/register-grades'
    },
    {
      icon: 'fas fa-chart-bar',
      label: 'Reportes',
      route: '/dashboard/reports'
    },
  ];
}
