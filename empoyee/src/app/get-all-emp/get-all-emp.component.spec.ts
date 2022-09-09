import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllEmpComponent } from './get-all-emp.component';

describe('GetAllEmpComponent', () => {
  let component: GetAllEmpComponent;
  let fixture: ComponentFixture<GetAllEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
