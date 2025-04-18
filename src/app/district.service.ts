import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {
  private url = 'http://localhost:8083/dsmaster/';

  constructor(private http: HttpClient) {}

  getAllDistricts(stateId: string | undefined): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}getalldistrict/${stateId}`);
  }

  getId(districtId: string | undefined): Observable<any> {
    return this.http.get<any>(`${this.url}getdistrict/${districtId}`);
  }

  // Use disPostImage for uploading district images
  // (formData: FormData): Observable<any> {
  //   const headers = new HttpHeaders(); // Optionally, you can set headers if needed

  //   return this.http.post(`${this.url}uplode/district`, formData, { headers });
  // }\

  disPostImage(formData: FormData): Observable<any> {
    const headers = new HttpHeaders(); // Optionally, you can set headers if needed

    return this.http.post(`${this.url}uplode/district`, formData, { headers });
  }
}
