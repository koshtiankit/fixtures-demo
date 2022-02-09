import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixturesListComponent } from './fixtures-list/fixtures-list.component';
import { FixturesComponent } from './fixtures.component';
import { FixtureRoutingModule } from './fixture-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FixturesListComponent,
    FixturesComponent
  ],
  imports: [
    CommonModule,
    FixtureRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    //HttpClientModule
  ],
  providers: []
})
export class FixturesModule { }
