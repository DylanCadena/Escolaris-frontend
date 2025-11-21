import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Student {
  id: number;
  name: string;
  deberes: number | null;
  trabajosGrupales: number | null;
  actuaciones: number | null;
  promedio: number;
  status: 'approved' | 'risk' | 'failed';
}

@Component({
  selector: 'app-register-grades',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-grades.component.html',
  styleUrls: ['./register-grades.component.scss']
})
export class RegisterGradesComponent {
  selectedSubject: string = '';
  selectedGroup: string = '';
  selectedPeriod: string = '';
  selectedEvaluation: string = '';

  students: Student[] = [
    { id: 1, name: 'ARAUJO QUIROGA, ZAMIRA YAMILEDT', deberes: 10.00, actuaciones: 8.50, trabajosGrupales: 8.00, promedio: 0, status: 'approved' },
    { id: 2, name: 'ARROBO CHARIGUAMAN, JERONIMO SEBASTIAN', deberes: 10.00, actuaciones: 7.00, trabajosGrupales: 6.00, promedio: 0, status: 'approved' },
    { id: 3, name: 'CARVAJAL LEON, DENIS THALEZWER', deberes: 10.00, actuaciones: 9.00, trabajosGrupales: 8.50, promedio: 0, status: 'approved' },
    { id: 4, name: 'BLACK ARANDA, CARLOS FERNANDO', deberes: 10.00, actuaciones: 6.00, trabajosGrupales: 5.00, promedio: 0, status: 'approved' },
    { id: 5, name: 'BRITO VARGAS, MILTON RENE', deberes: 10.00, actuaciones: 5.50, trabajosGrupales: 4.00, promedio: 0, status: 'approved' }
  ];

  ngOnInit() {
    this.calculateAllAverages();
  }

  calculateAverage(student: Student): void {
    const deberes = student.deberes || 0;
    const trabajosGrupales = student.trabajosGrupales || 0;
    const actuaciones = student.actuaciones || 0;
    
    student.promedio = (deberes + trabajosGrupales + actuaciones) / 3;
    
    if (student.promedio >= 7) {
      student.status = 'approved';
    } else if (student.promedio >= 5) {
      student.status = 'risk';
    } else {
      student.status = 'failed';
    }
  }

  calculateAllAverages(): void {
    this.students.forEach(student => this.calculateAverage(student));
  }

  onGradeChange(student: Student): void {
    this.calculateAverage(student);
  }

  saveGrades(): void {
    console.log('Guardando calificaciones...', this.students);
    alert('Calificaciones guardadas correctamente');
  }
}
