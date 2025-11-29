import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as XLSX from 'xlsx';
import { GradesService } from '../../../../core/services/grades.service';

@Component({
  selector: 'app-upload-grades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class UploadGradesComponent {
  fileName: string | null = null;
  gradesData: any[] = [];
  headers: string[] = [];

  constructor(private gradesService: GradesService) { }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.fileName = input.files[0].name;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        const binaryString = e.target.result;
        const workbook = XLSX.read(binaryString, { type: 'binary' });

        // Assume first sheet
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        // Parse to JSON
        const rawData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        if (rawData.length > 0) {
          this.headers = rawData[0] as string[];
          // Map rest of rows to objects based on known columns or just raw
          // For this specific requirement: Name, Subject, Homework, Group Work
          // Let's try to map it intelligently or just take the raw data and let the user verify

          // Removing header row
          const rows = rawData.slice(1);

          this.gradesData = rows.map((row: any) => {
            return {
              studentName: row[0], // Name
              subject: row[1],     // Subject
              homework: row[2],    // Homework
              groupwork: row[3],   // Group Work
              exams: row[4]        // Exams
            };
          });
        }
      };
      reader.readAsBinaryString(input.files[0]);
    }
  }

  upload() {
    if (this.gradesData.length === 0) {
      alert('No hay datos para subir');
      return;
    }
    console.log(this.gradesData);

    this.gradesService.uploadGrades(this.gradesData).subscribe({
      next: (res) => {
        alert(`Se subieron ${res.count} registros correctamente.`);
        this.gradesData = [];
        this.fileName = null;
      },
      error: (err) => {
        console.error(err);
        alert('Error al subir notas');
      }
    });
  }
}
