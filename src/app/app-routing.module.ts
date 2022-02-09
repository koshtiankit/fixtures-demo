import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', redirectTo: 'fixtures', pathMatch: 'full' },
      {
            path: 'fixtures',
            loadChildren: () => import('./pages/fixtures/fixtures.module').then(
                    (m) => m.FixturesModule
            ),
      }
    ],
  },
  { path: '', redirectTo: 'fixtures', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
