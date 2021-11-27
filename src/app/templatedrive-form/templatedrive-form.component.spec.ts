import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedriveFormComponent } from './templatedrive-form.component';

describe('TemplatedriveFormComponent', () => {
  let component: TemplatedriveFormComponent;
  let fixture: ComponentFixture<TemplatedriveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatedriveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatedriveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
