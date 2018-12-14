import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombaoComponent } from './combao.component';

describe('CombaoComponent', () => {
  let component: CombaoComponent;
  let fixture: ComponentFixture<CombaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
