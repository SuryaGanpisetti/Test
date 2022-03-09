import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardFineshedComponent } from './wizard-fineshed.component';

describe('WizardFineshedComponent', () => {
  let component: WizardFineshedComponent;
  let fixture: ComponentFixture<WizardFineshedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardFineshedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardFineshedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
