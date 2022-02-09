import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixturesComponent } from './fixtures.component';

const routes: Routes = [
  {
    path: '',
    component: FixturesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixtureRoutingModule { }
