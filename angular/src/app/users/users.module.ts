import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [ListComponent, LoginComponent],
  imports: [
    UsersRoutingModule
  ]
})
export class UsersModule { }