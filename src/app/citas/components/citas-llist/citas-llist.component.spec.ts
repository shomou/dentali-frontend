import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasLlistComponent } from './citas-llist.component';

describe('CitasLlistComponent', () => {
  let component: CitasLlistComponent;
  let fixture: ComponentFixture<CitasLlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitasLlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitasLlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
