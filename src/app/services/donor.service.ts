import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DonorService {
  constructor(private httpClient: HttpClient) {}
  getDonors(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'donors');
  }
}
