import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetissidebarComponent } from './metissidebar.component';

describe('MetissidebarComponent', () => {
  let component: MetissidebarComponent;
  let fixture: ComponentFixture<MetissidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetissidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetissidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
