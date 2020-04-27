import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheredComponent } from './shered.component';

describe('SheredComponent', () => {
  let component: SheredComponent;
  let fixture: ComponentFixture<SheredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
