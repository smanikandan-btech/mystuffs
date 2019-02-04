import { Component, OnInit } from '@angular/core';
import { UniversitiesService } from '../universities.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private page:number = 1;
  private list: any[] = [];
  private showLoader: Boolean = false;
  private filterTxt:string = '';

  constructor(private universitiesService: UniversitiesService) { }

  ngOnInit() {
    this.getUniversityList(this.page);
  }

  getUniversityList(page) {
    this.showLoader = true;
    this.page = page;
    this.universitiesService.getList(page).subscribe( response => {
      this.list = response;
      this.showLoader = false;
    })
  }

  pageChanged(page) {
    this.getUniversityList(page);
  }

  filterResult() {
    this.universitiesService.getList(0, this.filterTxt).subscribe( response => {
      this.list = response;
      this.showLoader = false;
    })
  }

}
