import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
@NgModule({
  declarations: [HomeComponent],

  imports: [
    CommonModule,
    MatSliderModule,

    RouterModule.forChild([
      {path: '', component: HomeComponent}
    ]),
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,

  ],
  exports: [
    RouterModule
  ]

})

export class HomeModule{

}
