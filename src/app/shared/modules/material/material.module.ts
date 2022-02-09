import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


const modules = [
  CommonModule,
 //BrowserAnimationsModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatGridListModule,
  MatToolbarModule,
  MatTableModule
];

@NgModule({
  declarations: [],
  imports: [
    ...modules
  ],
  exports: [...modules]
})
export class MaterialModule { }
