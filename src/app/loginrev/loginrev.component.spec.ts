import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginrevComponent } from './loginrev.component';

describe('LoginrevComponent', () => {
  let component: LoginrevComponent;
  let fixture: ComponentFixture<LoginrevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginrevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
