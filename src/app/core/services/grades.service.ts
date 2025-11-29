import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class GradesService {
 private apiUrl = 'http://localhost:3000/api/grades';

 constructor(private http: HttpClient) { }

 uploadGrades(grades: any[]): Observable<any> {
  return this.http.post(`${this.apiUrl}/upload`, grades);
 }

 getGrades(): Observable<any> {
  return this.http.get(this.apiUrl);
 }

 updateGrades(grades: any[]): Observable<any> {
  return this.http.put(`${this.apiUrl}/bulk-update`, grades);
 }
}
