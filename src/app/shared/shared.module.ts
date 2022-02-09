import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    CommonModule,
    MaterialModule,
    HeaderComponent
  ],
  providers: [],
})
export class SharedModule {}
