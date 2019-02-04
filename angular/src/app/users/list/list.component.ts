import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  private usersList:any = [];

  constructor(private userService: UsersService) {
    console.log('constructor');

   }

  ngOnInit() {
    this.getUsersList();
    
  }

  getUsersList() {
    this.userService.getUsers().subscribe(res => {
      this.usersList = res;
      console.log(this.usersList);
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('ondestroy')
  }
}
