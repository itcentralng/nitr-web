import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNitrComponent } from './about-nitr.component';

describe('AboutNitrComponent', () => {
  let component: AboutNitrComponent;
  let fixture: ComponentFixture<AboutNitrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutNitrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutNitrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
