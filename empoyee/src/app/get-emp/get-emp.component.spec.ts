import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmpComponent } from './get-emp.component';

describe('GetEmpComponent', () => {
  let component: GetEmpComponent;
  let fixture: ComponentFixture<GetEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
