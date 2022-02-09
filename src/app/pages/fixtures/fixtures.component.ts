import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, Observable } from 'rxjs';
import { FixturesListComponent } from './fixtures-list/fixtures-list.component';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.scss']
})
export class FixturesComponent implements OnInit {
  @ViewChild(FixturesListComponent) listComponent!: FixturesListComponent;
  fixtureForm!: FormGroup;

  initForm(): void{
    this.fixtureForm = this.formBuilder.group({
      searchInput: [''],
    });
  }

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
      this.fixtureForm.get("searchInput")
        ?.valueChanges.pipe(debounceTime(500))
        .subscribe((data: any) => {
          this.listComponent.isShowLoader = true;
          this.listComponent.getSearchResults(data);
        });
  }

  resetData(){
    this.listComponent.isShowLoader = true;
    this.fixtureForm.get('searchInput')?.setValue('');
    this.listComponent.getSearchResults("");
    this.listComponent.isShowLoader = false;
  }

}
