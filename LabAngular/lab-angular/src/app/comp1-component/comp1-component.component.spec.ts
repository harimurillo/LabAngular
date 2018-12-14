import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1ComponentComponent } from './comp1-component.component';

describe('Comp1ComponentComponent', () => {
  let component: Comp1ComponentComponent;
  let fixture: ComponentFixture<Comp1ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
