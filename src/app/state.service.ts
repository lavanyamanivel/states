import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private url = 'http://localhost:8083/dsmaster/';

  constructor(private http: HttpClient) {}

  getAllStates(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}getallstate`);
  }

  getId(stateId: string | undefined): Observable<any> {
    return this.http.get<any>(`${this.url}getstatebyid/${stateId}`);
  }

  staPostImage(formData: FormData): Observable<any> {
    const headers = new HttpHeaders(); // Optionally, you can set headers if needed

    return this.http.post(`${this.url}uploadImage`, formData, { headers });
  }
  

  StatePostData(formData: FormData): Observable<any> {
    const headers = new HttpHeaders(); // Optionally, you can set headers if needed

    return this.http.post(`${this.url}uplode/state`, formData, { headers });
  }
  
}
