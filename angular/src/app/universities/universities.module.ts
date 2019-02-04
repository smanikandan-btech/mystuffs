import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversitiesRoutingModule } from './universities-routing.module';
import { ListComponent } from './list/list.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    UniversitiesRoutingModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class UniversitiesModule { }
