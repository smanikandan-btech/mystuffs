import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Response } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService {

  private limit: number = 10;
  private offset: number = 0;
  constructor(private http: HttpClient) { }

  getList(page, filterTxt = '') {
    this.offset = this.limit * (page - 1);    
    let apiurl = environment.apiUrl + `&offset=${this.offset}&limit=${this.limit}`;

    if(filterTxt){
      apiurl += `&filter[university_name]=${filterTxt}`;
    }
    return this.http.get<Response[]>(apiurl);
  }
}
