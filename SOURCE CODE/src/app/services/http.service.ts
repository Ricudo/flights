import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({ providedIn: 'root' })
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getFlights(): Observable<string> {
    return  this.http.get('./assets/mock-data/mockFlights.csv', {responseType: 'text'})
  }

  getRegistration(): Observable<string> {
    return this.http.get('./assets/mock-data/mockRegistrations.csv', {responseType: 'text'})
  }
}
