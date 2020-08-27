import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaryawanCreateComponent } from './karyawan-create.component';

describe('KaryawanCreateComponent', () => {
  let component: KaryawanCreateComponent;
  let fixture: ComponentFixture<KaryawanCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaryawanCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaryawanCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
