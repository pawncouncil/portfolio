import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  onSubmit(formData) {
    return this._http.post('https://formspree.io/mplnznrm', formData);
  }

}
