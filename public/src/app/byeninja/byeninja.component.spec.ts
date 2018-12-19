import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByeninjaComponent } from './byeninja.component';

describe('ByeninjaComponent', () => {
  let component: ByeninjaComponent;
  let fixture: ComponentFixture<ByeninjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByeninjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByeninjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
