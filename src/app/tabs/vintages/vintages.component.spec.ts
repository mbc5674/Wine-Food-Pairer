import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VintagesComponent } from './vintages.component';

describe('VintagesComponent', () => {
  let component: VintagesComponent;
  let fixture: ComponentFixture<VintagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VintagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VintagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
