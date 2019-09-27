import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcontactComponent } from './acontact.component';

describe('AcontactComponent', () => {
  let component: AcontactComponent;
  let fixture: ComponentFixture<AcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
