import { Injectable } from '@angular/core';



import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class StudentService {
  service(arg0: string) {
    throw new Error('Method not implemented.');
  }
  announce(arg0: string) {
    throw new Error('Method not implemented.');
  }

  private baseUrl = 'http://localhost:8080/studentcrud/api/stud/students';
  
  constructor(private http: HttpClient) { }





  getStudent(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createStudent(student: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, student);
  }

  updateStudent(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getStudentsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}