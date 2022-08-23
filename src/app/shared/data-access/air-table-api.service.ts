import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AirTableApiService {
  constructor(private http: HttpClient) {}

  addEmail(email: string) {
    const newUrl = '/api/newsletter';

    const payload = {
      records: [
        {
          fields: {
            email,
          },
        },
      ],
    };

    return this.http.post(newUrl, payload);
  }
}
