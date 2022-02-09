import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixturesListComponent } from './fixtures-list.component';

describe('FixturesListComponent', () => {
  let component: FixturesListComponent;
  let fixture: ComponentFixture<FixturesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixturesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixturesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
