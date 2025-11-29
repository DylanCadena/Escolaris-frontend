import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GradesService } from '../../../../core/services/grades.service';

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

  students: any[] = [];

  constructor(private gradesService: GradesService) { }

  ngOnInit() {
    this.loadGrades();
  }

  loadGrades() {
    this.gradesService.getGrades().subscribe({
      next: (data) => {
        this.students = data.map((grade: any) => ({
          ...grade,
          name: grade.studentName,
          materia: grade.subject,
          deberes: grade.homework,
          trabajosGrupales: grade.groupwork,
          examenes: grade.exams || 0,
          promedio: 0,
          status: 'approved'
        }));
        this.calculateAllAverages();
      },
      error: (err) => console.error('Error loading grades', err)
    });
  }

  calculateAverage(student: any): void {
    const deberes = student.deberes || 0;
    const trabajosGrupales = student.trabajosGrupales || 0;
    const examenes = student.examenes || 0;

    student.promedio = (deberes + trabajosGrupales + examenes) / 3;

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

  onGradeChange(student: any): void {
    this.calculateAverage(student);
  }

  saveGrades(): void {
    const updates = this.students.map(s => ({
      _id: s._id,
      homework: s.deberes,
      groupwork: s.trabajosGrupales,
      exams: s.examenes
    }));

    this.gradesService.updateGrades(updates).subscribe({
      next: () => alert('Calificaciones guardadas correctamente'),
      error: (err) => {
        console.error('Error saving grades', err);
        alert('Error al guardar calificaciones');
      }
    });
  }
}
