import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiURL:string = 'https://reqres.in/api/users?page=4';

  constructor(private http: HttpClient) { }

  getUsers():Observable<any[]> {
    return this.http.get<Response[]>(environment.apiUrl + '&offset=0&limit=10'); //.pipe(map(res => res.data));
    /*.pipe(
      filter(response => response.data.length == 0),
      map(res => res.data),
    );*/
  }
}
