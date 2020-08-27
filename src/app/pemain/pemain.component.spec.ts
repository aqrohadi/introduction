import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PemainComponent } from './pemain.component';

describe('PemainComponent', () => {
  let component: PemainComponent;
  let fixture: ComponentFixture<PemainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PemainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
