import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(
      `${this.apiServerUrl}/api/v1/employee/all`
    );
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(
      `${this.apiServerUrl}/api/v1/employee/add`,
      employee
    );
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(
      `${this.apiServerUrl}/api/v1/employee/update`,
      employee
    );
  }

  public deleteEmployee(employeeUuid: string): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/api/v1/employee/delete/${employeeUuid}`
    );
  }
}
